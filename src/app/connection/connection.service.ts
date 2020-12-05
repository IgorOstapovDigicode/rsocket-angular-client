import { Injectable } from '@angular/core';
import {
  RSocketClient,
  JsonSerializer,
  IdentitySerializer
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private socket;
  private messageSubject = new BehaviorSubject({});
  readonly message = this.messageSubject.asObservable();

  constructor() {
    const client = this.createConnectionClient();
    client.connect().subscribe({
      onComplete: socket => {
        this.socket = socket;
        },
      onError: error => {
        throw new Error(error);
      }
    });
  }

  requestStream(data, metadata): void {
    if (!this.socket) {
      throw new Error('Error: Connection have not been created');
    }

    this.socket.requestStream({
      data,
      metadata
    })
      .subscribe({
        onComplete: () => {
          console.log('complete');
          },
        onError: error => {
          throw new Error(error);
          },
        onNext: payload => {
          console.log(payload.data);
          this.messageSubject.next(payload.data);
        },
        onSubscribe: subscription => {
          subscription.request(2147483647);
        }
      });
  }

  private createConnectionClient(): RSocketClient {
    return new RSocketClient({
      serializers: {
        data: JsonSerializer,
        metadata: IdentitySerializer
      },
      setup: {
        // ms btw sending keepalive to server
        keepAlive: 60000,
        // ms timeout if no keepalive response
        lifetime: 180000,
        // format of `data`
        dataMimeType: 'application/json',
        // format of `metadata`
        metadataMimeType: 'message/x.rsocket.routing.v0',
      },
      transport: new RSocketWebSocketClient({
        url: 'ws://localhost:8080/tweetsocket'
      }),
    });
  }
}
