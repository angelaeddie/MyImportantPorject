import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
//GPS定位插件
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,SidemenuPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs backButtonText: '返回' /*配置返回按钮*/ 
      backButtonText: '', /*配置返回按钮*/

      //tabsPlacement: 'top',
      iconMoode: 'ios', //引用ios的返回图标
      mode: 'ios',//模型设置为ios后风格也为ios
      modalEnter: 'modal-slide-in',//设置返回的动画效果
      modalLeave: 'modal-slide-out', //设置返回的动画效果
      
      platforms:{
        ios:{
          menuType:'overlay'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,SidemenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
