import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angular4PaystackComponent } from 'projects/angular4-paystack/src/public_api';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular4PaystackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
