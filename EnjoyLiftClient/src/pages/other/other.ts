import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { SettingPage } from '../setting/setting'
/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {
  homePage:any;
  settingPage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage=HomePage;
    this.settingPage=SettingPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

  openPage(page){
    this.navCtrl.push(page);
  }
}
