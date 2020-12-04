import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ConnectionModule} from './connection/connection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
