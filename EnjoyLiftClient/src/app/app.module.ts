//根模块  告诉ionic怎么组装应用

//引入angular和ionic的系统模块
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//ionic 打包app以后配置启动画面，以及导航条的服务（不用管 ）
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//引入根组件
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { OtherPage } from '../pages/other/other';

@NgModule({
  declarations: [ /*声明组件*/
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    OtherPage
  ],
  imports: [/*引入模块 依赖的模块*/
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],/*启动的模块*/
  entryComponents: [/*配置不会在模版中的组件*/
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    OtherPage
  ],
  providers: [/*配置服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
