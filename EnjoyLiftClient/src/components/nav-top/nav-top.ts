import { Component } from '@angular/core';

/**
 * Generated class for the NavTopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-top',
  templateUrl: 'nav-top.html'
})
export class NavTopComponent {

  public list = [];
  public widthList = "";

  constructor() {
    this.list = [{ title: "GS", link: "#" }, { title: "K", link: "#" }, { title: "WW", link: "#" }, { title: "SRDZ", link: "#" }]
    this.widthList = this.list.length * 100 + "px";
  }

}
