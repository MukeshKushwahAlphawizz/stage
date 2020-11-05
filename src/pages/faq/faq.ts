import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  faqList = [
    {
      question:'What is Lorem ipsum?',
      answer:'Lorem ipsum is simply dummy text printing lorem ispum been the industry\'s standard dummy text ever since the 1500s, when an unknown\n' +
        '      ispum been the industry\'s standard dummy text ever since the 1500s, when an unknown ispum been the industry\'s standard dummy text ever since the 1500s, when an unknown',
      isOpen:true
    },
    {
      question:'Simply dummy',
      answer: 'Simply dummy text printing lorem ispum been the industry\'s standard dummy text ever since the 1500s',
      isOpen:false
    },
    {
      question:'Established fact',
      answer: '',
      isOpen:false
    },
    {
      question:'Page when looking',
      answer: '',
      isOpen:false
    },
    {
      question:'Like readable English',
      answer: '',
      isOpen:false
    },
    {
      question:'There are many variations',
      answer: '',
      isOpen:false
    },
    {
      question:'Contrary to popular',
      answer: '',
      isOpen:false
    },
    {
      question:'Randomised words',
      answer: '',
      isOpen:false
    },
    {
      question:'All the Lorem Ipsum',
      answer: '',
      isOpen:false
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
