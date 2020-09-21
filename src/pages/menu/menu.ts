import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'TabsPage';
  userData : any = {};
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}
