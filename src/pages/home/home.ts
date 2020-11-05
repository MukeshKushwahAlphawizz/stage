import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from "moment";
import {App} from "ionic-angular/index";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  searchTxt: any;
  weekList:any = [];

  constructor(public navCtrl: NavController,
              public app: App,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getWeekList();
  }

  getWeekList(){
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      let d = moment(date, 'YYYY-MM-DD');
      if (i == 0){
        this.weekList.push({
          name:d.format('dddd'),
          date:date,
          isSelected:true
        })
      }else {
        this.weekList.push({
          name:d.format('dddd'),
          date:date,
          isSelected:false
        })
      }
    }
  }

  getToday(day) {
    let date1 = new Date(Date.now());
    let d1 = moment(date1, 'YYYY-MM-DD');
    if (day.name == d1.format('dddd')){
      return 'todayDate';
    }else {
      return '';
    }
  }

  selectDay(day: any) {
    this.weekList.filter(item=>{
      if (item.name == day.name){
        item.isSelected = true;
      }else {
        item.isSelected = false;
      }
    })
  }

  searchInput($event: UIEvent) {

  }

  searchCancel($event: UIEvent) {

  }

  openCategory(type: string) {
    this.navCtrl.push('CategoryListPage',{categoryType:type})
  }

  openAllProjects() {
    this.navCtrl.push('ProjectListPage');
  }

  openAllCategories() {
    this.navCtrl.push('AllCategoriesPage');
  }

  openNotification() {
    this.navCtrl.push('NotificationPage');
  }

  openProjectInner(status: string) {
    this.app.getRootNav().push('ProjectInnerPage',{status:status});
  }

  eventDetail() {
    this.app.getRootNav().push('EventDetailPage');
  }

  spaceDetail() {
    this.app.getRootNav().push('SpaceDetailPage');
  }

  equipmentDetail() {
    this.app.getRootNav().push('EquipmentDetailPage');
  }
}
