import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from "moment";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  searchTxt: any;
  weekList:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log(this.weekList);
  }


  searchInput($event: UIEvent) {

  }

  searchCancel($event: UIEvent) {

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
}
