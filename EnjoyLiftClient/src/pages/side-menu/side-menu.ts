
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { OtherPage } from '../other/other'
import { SettingPage } from '../setting/setting'
/**
 * Generated class for the SideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
 

})
export class SideMenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  //public pages:any;
  otherPage: any;
  settingPage: any;
  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    menuCtrl.enable(true);
    this.rootPage = HomePage;
    // this.pages = [
    //   {title: 'homePage', component:OtherPage},
    //   {title: 'friendsPage', component: OtherPage},
    //   {title: 'eventsPage', component: OtherPage}
    // ]
    this.otherPage = OtherPage;
    this.settingPage = SettingPage;
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SideMenuPage');
  }
  closeMenu() {
    this.menuCtrl.close();
  }
  //  openPage(pages) {
  //  this.nav.push(pages.component);
  // }
  openPage(page){
    this.navCtrl.push(page);
  }
}
