import {Component} from '@angular/core';
import {ConnectionService} from './connection/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rsocket-angular-client';

  constructor(private connectionService: ConnectionService) {}

  // tslint:disable-next-line:typedef
  request() {
    const data = {
      'author': 'linustorvalds'
    };
    const metadata = String.fromCharCode('tweets.by.author'.length) + 'tweets.by.author';
    this.connectionService.requestStream(data, metadata);
  }
}
