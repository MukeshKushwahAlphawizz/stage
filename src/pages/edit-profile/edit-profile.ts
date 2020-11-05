import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import {ViewController} from "ionic-angular/index";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  dobMax: String = new Date().toISOString();

  constructor(public navCtrl: NavController,
              public util:UtilProvider,
              public viewCtrl:ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  deleteAccount() {
    this.util.presentConfirm('Are You Sure?','Do you really want to delete your account? This process can not be undo','Cancel','Delete').then(succ=>{
      this.navCtrl.setRoot('EntryPage');
    }).catch(rejected=>{
    })
  }

  back() {
    this.viewCtrl.dismiss();
  }
}
