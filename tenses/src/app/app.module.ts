import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { MenuPage } from '../pages/menu/menu';
import { PresentPage } from '../pages/present/present';
import { PastPage } from '../pages/past/past';
import { FuturePage } from '../pages/future/future';
import { PresentSimplePage } from '../pages/present-simple/present-simple';
import { PresentConPage } from '../pages/present-con/present-con';
import { PresentPerfectPage } from '../pages/present-perfect/present-perfect';
import { PresentPerfectConPage } from '../pages/present-perfect-con/present-perfect-con';
import { PastSimplePage } from '../pages/past-simple/past-simple';
import { PastConPage } from '../pages/past-con/past-con';
import { PastPerfectPage } from '../pages/past-perfect/past-perfect';
import { PastPerfectConPage } from '../pages/past-perfect-con/past-perfect-con';
import { FutureSimplePage } from '../pages/future-simple/future-simple';
import { FutureConPage } from '../pages/future-con/future-con';
import { FuturePerfectPage } from '../pages/future-perfect/future-perfect';
import { FuturePerfectConPage } from '../pages/future-perfect-con/future-perfect-con'; 
import { FacebookPage } from '../pages/facebook/facebook';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    MenuPage,
    PresentPage,
    PastPage,
    FuturePage,
    PresentSimplePage,
    PresentConPage,
    PresentPerfectPage,
    PresentPerfectConPage,
    PastSimplePage,
    PastConPage,
    PastPerfectPage,
    PastPerfectConPage,
    FutureSimplePage,
    FutureConPage,
    FuturePerfectPage,
    FuturePerfectConPage,
    FacebookPage,
    SearchPage


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    MenuPage,
    PresentPage,
    PastPage,
    FuturePage,
    PresentSimplePage,
    PresentConPage,
    PresentPerfectPage,
    PresentPerfectConPage,
    PastSimplePage,
    PastConPage,
    PastPerfectPage,
    PastPerfectConPage,
    FutureSimplePage,
    FutureConPage,
    FuturePerfectPage,
    FuturePerfectConPage,
    FacebookPage,
    SearchPage
        
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
