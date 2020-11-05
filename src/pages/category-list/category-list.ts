import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App} from "ionic-angular/index";


@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {
  categoryType:any = 'Music';
  categoryList:any = [
    {
      categoryImage:'',
      title:'',
      subtitle:''
    }
  ];

  constructor(public navCtrl: NavController,
              public app: App,
              public navParams: NavParams) {
    this.categoryType = navParams.data.categoryType;
  }

  ionViewDidLoad() {
    this.setupData();
  }

  setupData() {
    switch (this.categoryType){
      case 'Music': this.setMusicData();
        break;
      case 'Fashion': this.setFashionData();
        break;
      case 'Shows': this.setShowsData();
        break;
      case 'Support': this.setSupportData();
        break;
      case 'Dance': this.setDanceData();
        break;
      case 'Art': this.setArtData();
        break;
    }
  }

  setMusicData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/music1.png',
        title:'Dj',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/music2.png',
        title:'Musician',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/music3.png',
        title:'Singer',
        subtitle:'Tags'
      }
    ];
  }

  setFashionData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/fashion1.png',
        title:'Model',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/fashion2.png',
        title:'Make Up Artist',
        subtitle:'Tags'
      }
    ];
  }

  setShowsData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/shows1.png',
        title:'Comedian',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/shows2.png',
        title:'Magician',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/shows3.png',
        title:'Host',
        subtitle:'Tags'
      }
    ];
  }

  setSupportData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/support1.png',
        title:'Lighting',
        subtitle:'Tags'
      },
      {
        categoryImage:'assets/imgs/support1.png',
        title:'Sound Engineer',
        subtitle:'Tags'
      }
    ];
  }

  setDanceData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/dance.png',
        title:'Dancer',
        subtitle:'Tags'
      }
    ];
  }
  setArtData() {
    this.categoryList = [
      {
        categoryImage:'assets/imgs/art.png',
        title:'Artist',
        subtitle:'Tags'
      }
    ];
  }

  openDetailList(item: any) {
    if (item.title == 'Dancer' || item.title == 'Dj'){
      this.app.getRootNav().push('DjListPage');
    }
  }
}
