import {Component} from '@angular/core';
import {ConnectionService} from './connection/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private connectionService: ConnectionService) {}

  // tslint:disable-next-line:typedef
  requestStream(author) {
    const data = {
      'author': author
    };
    const metadata = String.fromCharCode('tweets.by.author'.length) + 'tweets.by.author';
    this.connectionService.requestStream(data, metadata);
  }
}
