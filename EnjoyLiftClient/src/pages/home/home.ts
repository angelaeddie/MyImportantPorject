import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { SidemenuPage } from '../sidemenu/sidemenu';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public SidemenuPage = SidemenuPage;
  public list =[];
  public  widthList ="";
  constructor(app: App, menu: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.list=[{title:"GS",link:"#"},{title:"K",link:"#"},{title:"WW",link:"#"},{title:"SRDZ",link:"#"}]
    this.widthList=this.list.length*100+"px";
  }
  gotoMenu(){
    this.navCtrl.push(SidemenuPage);
  }
}
