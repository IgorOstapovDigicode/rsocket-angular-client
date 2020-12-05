import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../connection/connection.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message$;

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.message$ = this.connectionService.message;
  }

}
