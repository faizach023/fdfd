import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FutureSimplePage } from '../future-simple/future-simple';
import { FutureConPage } from '../future-con/future-con';
import { FuturePerfectPage } from '../future-perfect/future-perfect';
import { FuturePerfectConPage } from '../future-perfect-con/future-perfect-con';


/*
  Generated class for the Future page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-future',
  templateUrl: 'future.html'
})
export class FuturePage {
  futuresimplePage = FutureSimplePage; 
  futureconPage = FutureConPage;
  futureperfectPage = FuturePerfectPage;
  futureperfectconPage = FuturePerfectConPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuturePage');
  }

}
