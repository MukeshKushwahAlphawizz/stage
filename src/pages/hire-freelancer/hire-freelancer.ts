import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hire-freelancer',
  templateUrl: 'hire-freelancer.html',
})
export class HireFreelancerPage {
  isReviewSelected: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }

  selectSegment(data) {
    this.isReviewSelected = data;
  }

  viewDetail() {
    this.navCtrl.push('FreelancerDetailPage');
  }
}
