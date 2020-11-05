import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from "ionic-angular/index";

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  constructor(public navCtrl: NavController,
              public app: App,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  /*openChat() {
    this.navCtrl.setRoot('ChatPage');
  }*/
  openChat() {
    this.app.getRootNav().push('ChatPage');
  }
}
