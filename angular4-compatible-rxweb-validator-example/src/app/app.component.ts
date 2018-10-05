import { Component, OnInit } from '@angular/core';
import {alpha, ReactiveFormConfig, RxFormBuilder } from '@rxweb/reactive-form-validators';
import {FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  sampleFormGroup:FormGroup;
  constructor(private formBuilder: RxFormBuilder){}

  ngOnInit(){
    ReactiveFormConfig.set({
      "internationalization": {
          "dateFormat": "dmy",
          "seperator": "/"
      },
      "validationMessage": {
          "alpha": "only alpha value you enter",
      }
  });
  var user = new User();
  this.sampleFormGroup = this.formBuilder.formGroup(user);
  }
}
