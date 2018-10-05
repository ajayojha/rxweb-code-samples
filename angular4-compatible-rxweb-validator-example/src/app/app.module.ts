import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule,RxReactiveFormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
