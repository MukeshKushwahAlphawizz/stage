import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

  openSignUp() {
    this.navCtrl.setRoot('SignUpPage');
  }

  openLogin() {
    this.navCtrl.setRoot('LoginPage');
  }
}
