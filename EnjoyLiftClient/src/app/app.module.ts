import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuPage } from '../pages/side-menu/side-menu'
import { OtherPage } from '../pages/other/other'
import { SettingPage } from '../pages/setting/setting'
import { PersonalInfoPage} from '../pages/personal-info/personal-info'
import { ComponentsModule } from '../components/components.module'
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { ConfigProvider } from '../providers/config/config';
//后台运行
import { BackgroundMode } from '@ionic-native/background-mode';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuPage,
    OtherPage,SettingPage,PersonalInfoPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
     // tabsHideOnSubPages: 'true', //隐藏全部子页面 tabs backButtonText: '返回' /*配置返回按钮*/ 
      backButtonText: '', /*配置返回按钮*/
      //tabsPlacement: 'top',
      iconMoode: 'ios', //引用ios的返回图标
      mode: 'ios',//模型设置为ios后风格也为ios
      modalEnter: 'modal-slide-in',//设置返回的动画效果
      modalLeave: 'modal-slide-out', //设置返回的动画效
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
    HomePage,
    SideMenuPage,
    OtherPage,SettingPage,PersonalInfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,ComponentsModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServicesProvider,
    ConfigProvider,
    BackgroundMode,
  ]
})
export class AppModule {}
