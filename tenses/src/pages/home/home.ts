import { Component } from '@angular/core';
import { NavController,  NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuPage = MenuPage;
  

 constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
