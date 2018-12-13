//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http,Jsonp ,Headers} from '@angular/http';
import { ConfigProvider } from '../config/config';
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
  
  private headers =new Headers({'Content-Type': 'application/json'});//设置POST格式


  constructor(public http: Http, public jsonp:Jsonp, public config:ConfigProvider) {
    console.log('Hello HttpServiceProvider Provider');
  }

  //请求数据
  //apiUrl:    api/focus
  //apiUrl:     api/plist?page=1
  requestData(apiUrl,callback){

    if(apiUrl.indexOf('?')==-1){

      var api = this.config.apiURL+apiUrl+"?callback=JSONP_CALLBACK";
    }

        else{
          
      var api = this.config.apiURL+apiUrl+"&callback=JSONP_CALLBACK";
      
      }
    
    this.jsonp.get(api).subscribe(function(data){
     // console.log(data);

      callback(data['_body']); //回调函数
    },function(err){
      console.log(err);
    })

  }
  //post提交数据方法
  doPost(apiUrl,json,callback){
    var api = this.config.apiURL+apiUrl;
    this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){

      callback(res.json())
    })
  }

  // //post 提交数据

  // doPost(apiUrl,json,callback){
  //   var api=this.config.apiUrl+apiUrl;


  //   this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){

  //       callback(res.json());
  //   })

  // }


}