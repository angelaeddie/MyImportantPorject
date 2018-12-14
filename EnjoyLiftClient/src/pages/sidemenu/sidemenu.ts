import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {HomePage}from '../home/home'
import {ContactPage}from '../contact/contact'
//import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SidemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  
@ViewChild(Nav) nav:Nav;
rootPage:any;
public pages:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    this.rootPage = HomePage;
    
    this.pages = [
      {title: 'homePage', component: ContactPage},
      {title: 'friendsPage', component: ContactPage},
      {title: 'eventsPage', component: ContactPage}
      
    ]
  }
  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');
  }
  closeMenu() {
    this.menuCtrl.close();
  }
  openPage(pages){
    this.nav.push(pages.component);
  }
}
