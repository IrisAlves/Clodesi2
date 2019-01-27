import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pag-chaq1',
  templateUrl: 'pag-chaq1.html',
})
export class PagChaq1Page {

  images=['1.jpg','2.jpg','3.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagChaq1Page');
  }
  

}