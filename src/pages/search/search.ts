import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  selectFreelancer() {
    this.isFreeLancerSelected = true;
  }

  selectProject() {
    this.isFreeLancerSelected = false;
  }
}
