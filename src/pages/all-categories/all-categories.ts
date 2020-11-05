import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-all-categories',
  templateUrl: 'all-categories.html',
})
export class AllCategoriesPage {
  categoryList: any = [
    {
      categoryImage:'assets/imgs/music.png',
      name:'Music',
      tag:'Tags'
    },
    {
      categoryImage:'assets/imgs/fashion.png',
      name:'Fashion',
      tag:'Tags'
    },
    {
      categoryImage:'assets/imgs/show.png',
      name:'Shows',
      tag:'Tags'
    },
    {
      categoryImage:'assets/imgs/support1.png',
      name:'Support',
      tag:'Tags'
    },
    {
      categoryImage:'assets/imgs/dance.png',
      name:'Dance',
      tag:'Tags'
    },
    {
      categoryImage:'assets/imgs/art.png',
      name:'Art',
      tag:'Tags'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  openCategory(type: string) {
    this.navCtrl.push('CategoryListPage',{categoryType:type})
  }

}
