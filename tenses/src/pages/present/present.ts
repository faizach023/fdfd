import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PresentSimplePage } from '../present-simple/present-simple';
import { PresentConPage } from '../present-con/present-con';
import { PresentPerfectPage } from '../present-perfect/present-perfect';
import { PresentPerfectConPage } from '../present-perfect-con/present-perfect-con';
/*
  Generated class for the Present page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-present',
  templateUrl: 'present.html'
})
export class PresentPage {
  presentsimplePage = PresentSimplePage; 
  presentconPage = PresentConPage;
  presentperfectPage = PresentPerfectPage;
  presentperfectconPage = PresentPerfectConPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentPage');
  }

}
