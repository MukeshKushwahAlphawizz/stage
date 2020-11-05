import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {

  type:any = 'event'
  banner : any = 'assets/img/banner.png'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = navParams.data.type;
    this.setupTicket();
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }

  setupTicket() {
    switch (this.type){
      case 'event': this.setEventTicket()
        break;
      case 'equipment': this.setEquimentTicket()
        break;
      case 'space': this.setSpaceTicket();
        break;
    }
  }

  setEventTicket() {
    this.banner = 'assets/img/banner.png';
  }
  setEquimentTicket() {
    this.banner = 'assets/img/equipment-banner.png';
  }
  setSpaceTicket() {
    this.banner = 'assets/img/rent-banner.png';
  }
}
