import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  segmentProfile: any = 'profile';
  isReviewSelected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  selectSegment(data) {
    this.isReviewSelected = data;
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage');
  }
}
