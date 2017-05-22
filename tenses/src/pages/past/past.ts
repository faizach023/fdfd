import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PastSimplePage } from '../past-simple/past-simple';
import { PastConPage } from '../past-con/past-con';
import { PastPerfectPage } from '../past-perfect/past-perfect';
import { PastPerfectConPage } from '../past-perfect-con/past-perfect-con';

/*
  Generated class for the Past page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-past',
  templateUrl: 'past.html'
})
export class PastPage {
  pastsimplePage = PastSimplePage; 
  pastconPage = PastConPage;
  pastperfectPage = PastPerfectPage;
  pastperfectconPage = PastPerfectConPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastPage');
  }

}
