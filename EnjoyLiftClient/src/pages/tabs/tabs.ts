import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabRoots: Object[];

  constructor(public navCtrl: NavController) {

    this.tabRoots = [{
      root: HomePage,
      tabTitle: 'Home',
      tabIcon: 'home'
    },{
      root: AboutPage,
      tabTitle: 'About',
      tabIcon: 'document'
    },{
      root: ContactPage,
      tabTitle: 'Contact',
      tabIcon: 'notifications'
    }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
