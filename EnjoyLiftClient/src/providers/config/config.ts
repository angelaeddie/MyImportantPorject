//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  //api 请求地址
  public apiURL ="http://39.108.159.135/";
  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

}
