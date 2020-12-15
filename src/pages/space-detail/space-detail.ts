import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-space-detail',
  templateUrl: 'space-detail.html',
})
export class SpaceDetailPage {

  spaceData : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.spaceData = navParams.data.space;
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }

  book() {
    this.navCtrl.push('TicketPage',{type:'space'});
  }
}
