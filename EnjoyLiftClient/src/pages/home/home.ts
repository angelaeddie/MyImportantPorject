import {  Component, ViewChild, ElementRef} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { SidemenuPage } from '../sidemenu/sidemenu';

import { Geolocation } from '@ionic-native/geolocation';
declare var AMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  map: any;//地图对象
  public SidemenuPage = SidemenuPage;
  public list =[];
  public  widthList ="";
  constructor(private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    this.list=[{title:"GS",link:"#"},{title:"K",link:"#"},{title:"WW",link:"#"},{title:"SRDZ",link:"#"}]
    this.widthList=this.list.length*100+"px";
  }
  gotoMenu(){
    this.navCtrl.push(SidemenuPage);
  }

  ionViewDidEnter() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 11, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }
  public getGPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords.latitude,resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

}
