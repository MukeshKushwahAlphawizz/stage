import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../providers";
import {ViewController} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signUpForm: FormGroup;
  error_messages: any = {};
  constructor(public navCtrl: NavController,
              public user: User,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder) {
    this.setupLoginFormData();
  }
  setupLoginFormData() {
    this.error_messages = {
      email: [
        { type: "required", message: "Email is required" },
        { type: "pattern", message: 'Please enter valid email' }
      ],
      username: [
        { type: "required", message: "Email is required" }
      ],

      password: [
        { type: "required", message: 'Password is required' },
        { type: "minlength", message: "Minimun length should be 8" },
        { type: "maxlength", message: "Maximum length should be 12" }
      ],
      confirmPassword: [
        { type: "required", message: 'Confirm Password is required' },
        { type: "minlength", message: "Minimun length should be 8" },
        { type: "maxlength", message: "Maximum length should be 12" }
      ]
    };
    this.signUpForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),
        username: new FormControl(
          "",
          Validators.compose([
            Validators.required
          ])
        ),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12)
          ])
        ),
        confirmPassword: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12)
          ])
        )},
    );
  }

  signUp() {
    this.navCtrl.setRoot('MenuPage');
  }

  login() {
    this.viewCtrl.dismiss();
  }

}
