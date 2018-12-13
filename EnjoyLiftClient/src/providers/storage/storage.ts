
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor() {
    console.log('Hello StorageProvider Provider');
  }
  //localStorage
  //储存
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));/**对象换成字符串 */
  }
  //提取
  get(key){
    return JSON.parse(localStorage.getItem(key));/**字符串换成对象 */
  }
  //移除
  remove(key){
    localStorage.removeItem(key);
  }
}
