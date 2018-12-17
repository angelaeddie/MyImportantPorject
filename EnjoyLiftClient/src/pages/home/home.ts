import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

declare var AMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  map: any;//地图对象
  public postion='';
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
  ionViewDidEnter() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 11, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
    
     let that = this;
     that.map.plugin(["AMap.ToolBar",'AMap.Scale'], function (){
      that.map.addControl(new AMap.ToolBar());
      });
      AMap.plugin('AMap.Geolocation',  function () {//异步加载插件
       let geolocation = new AMap.Geolocation({
         enableHighAccuracy: true,//是否使用高精度定位，默认:true
         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
         showButton: true,        //显示定位按钮，默认：true
         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
         buttonOffset: new AMap.Pixel(10, 50),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
         zoomToAccuracy: true,     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
         useNative: true,     //是否使用安卓定位sdk用来进行定位，默认：false
         markerOptions:{
           bubble:true,      //是否将覆盖物的鼠标或touch等事件冒泡到地图上 
           draggable:true,  //设置点标记是否可拖拽移动，默认为false
           clickable:true   //点标记是否可点击
         }
       });
       that.map.addControl(geolocation);
     
       geolocation.getCurrentPosition();
     
       AMap.event.addListener(geolocation, 'complete', that.onComplete.bind(that));//返回定位信息      
       AMap.event.addListener(geolocation, 'error', (data) => {
         console.log('定位失败');
         console.log(data);
       });   //返回定位出错信息  
     
     });
     
     }
     
     //解析定位结果  
     onComplete(data) {
       console.log(data);
       console.log(data.position.toString());
       console.log(data.formattedAddress);
       this.postion = data.postion;
       var str = ['定位成功'];
       str.push('经度：' + data.position.getLng());
       str.push('纬度：' + data.position.getLat());
       if (data.accuracy) {
         str.push('精度：' + data.accuracy + ' 米');
       }//如为IP精确定位结果则没有精度信息     
       str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
       // document.getElementById('tip').innerHTML = str.join('<br>');  
       }
}
