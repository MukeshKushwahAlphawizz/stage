import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-space',
  templateUrl: 'add-space.html',
})
export class AddSpacePage {
  startDate: String = new Date().toISOString();
  endDate: String = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSpacePage');
  }

}
