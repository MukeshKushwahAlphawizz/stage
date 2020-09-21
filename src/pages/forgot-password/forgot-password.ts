import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  send() {

  }

  back() {
    this.viewCtrl.dismiss();
  }
}
