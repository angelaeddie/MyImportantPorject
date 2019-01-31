import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {
  lng:any;
  lat:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lng = this.navParams.get('lng');
    this.lat = this.navParams.get('lat');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

}
