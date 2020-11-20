import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  segmentProfile: any = 'profile';
  isReviewSelected: boolean = false;
  userData:any = {};
  constructor(public navCtrl: NavController,
              public storage:Storage,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getMyProfileData();
  }

  selectSegment(data) {
    this.isReviewSelected = data;
  }

  editProfile() {
    this.navCtrl.push('EditProfilePage');
  }

  getMyProfileData() {
    this.storage.get('userData').then(userData=>{
      this.userData = JSON.parse(userData);
      console.log(this.userData);
    })
  }
}
