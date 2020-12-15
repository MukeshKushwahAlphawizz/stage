import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipment-detail',
  templateUrl: 'equipment-detail.html',
})
export class EquipmentDetailPage {

  equipDetail: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipDetail = navParams.data.equip;
  }

  ionViewDidLoad() {
  }

  book() {
    this.navCtrl.push('TicketPage',{type:'equipment'});
  }

  back() {
    this.navCtrl.pop();
  }
}
