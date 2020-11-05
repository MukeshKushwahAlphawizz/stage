import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchTxt: any = '';
  isFreeLancerSelected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  searchInput($event: UIEvent) {

  }

  searchCancel($event: UIEvent) {

  }


  selectSegment(data) {
    this.isFreeLancerSelected = data;
  }

  openProject() {
    this.navCtrl.push('ViewProjectPage');
  }
}
