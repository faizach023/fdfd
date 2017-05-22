import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { FacebookPage } from '../facebook/facebook';
import { SearchPage } from '../search/search';
/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  startPage = StartPage
  facebookPage = FacebookPage
  searchPage = SearchPage
  
  
   

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  pushPage()
  {
    this.navCtrl.push(FacebookPage);
  }
  SPage()
  {
    this.navCtrl.push(StartPage);
  }
  SrchPage()
  {
    this.navCtrl.push(SearchPage);
  }
   presentToast()
  {
    let toast = this.toastCtrl.create
    ({
      message: 'Learn Tenses from this App',
      duration: 1000,
      position:'top'
    });
    toast.present();
  }
  
  PresentToast()
  {
    let toast = this.toastCtrl.create
    ({
      message: 'Give your facebook ID and Password',
      position:'middle',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }
}
