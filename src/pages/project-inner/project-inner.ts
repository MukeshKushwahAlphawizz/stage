import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project-inner',
  templateUrl: 'project-inner.html',
})
export class ProjectInnerPage {
  isCompleted: boolean = true;
  status : any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = navParams.data.status;
    console.log(this.status);
    this.status == 'InProgress'?this.isCompleted = false: this.isCompleted = true;
  }

  ionViewDidLoad() {

  }

  back() {
    this.navCtrl.pop();
  }
}
