import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { PresentPage } from '../present/present';
import { PastPage } from '../past/past';
import { FuturePage } from '../future/future';
/*
  Generated class for the Start page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  presentPage = PresentPage; 
  pastPage = PastPage; 
  futurePage = FuturePage;
  constructor(public navCtrl: NavController , public toastCtrl: ToastController, public navParams: NavParams) {}
  items=[
  'Pokemon yelloe',
   'Mega man',
   'Abc'];
   itemSelected(item: string){
	       let toast = this.toastCtrl.create
		   
    ({
      message: 'itemSlected'+item,
      duration: 1000,
      position:'top'
    });
    toast.present();
	  
   }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

}
