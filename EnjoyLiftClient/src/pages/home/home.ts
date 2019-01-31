import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { PersonalInfoPage } from '../personal-info/personal-info'
declare var AMap;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  public map: any;//地图对象
  public postion = '';
  public accuracy = '';
  public location_type = '';

  public myInterval: any; // 定时器
  public personalInfo: any;

  public waitressesMarkers: any; //服务端对象
  public makerArray=[];
  public showInTheCard:any;
  public isShowTheCard=false;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private backgroundMode: BackgroundMode, ) {
    this.personalInfo = PersonalInfoPage;
    this.backgroundMode.enable();

    //模拟数据
    this.waitressesMarkers = {
      result: [
        { name: "傻白甜", position: [114.597599, 37.605084], img: "assets/imgs/user.png" },
        { name: "女汉子", position: [102.597499, 18.605084], img: "assets/imgs/user.png" },
        { name: "英雄", position: [108.592399, 20.605084], img: "assets/imgs/user.png" }
      ]
    }
  }
  ionViewWillEnter() {
    this.loadMap();
    let that = this;
    AMap.plugin('AMap.Geolocation', function () {//异步加载插件
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LT',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 50),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true,     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        GeoLocationFirst: true,    //默认为false，设置为true的时候可以调整PC端为优先使用浏览器定位，失败后使用IP定位
        // noGeoLocation: 0,          //  是否禁止使用浏览器Geolocation定位，默认值为0，可选值0-3
        // 0: 可以使用浏览器定位
        // 1: 手机设备禁止使用浏览器定位
        // 2: PC上禁止使用浏览器定位
        // 3: 所有终端禁止使用浏览器定位
        // noIpLocate: 0,             //是否禁止使用IP定位，默认值为0，可选值0-3
        // 0: 可以使用IP定位        
        // 1: 手机设备禁止使用IP定位        
        // 2: PC上禁止使用IP定位        
        // 3: 所有终端禁止使用IP定位
        markerOptions: {
          // autoRotation: true,  //是否自动旋转。点标记在使用moveAlong动画时，路径方向若有变化，点标记是否自动调整角度，默认为false。广泛用于自动调节车辆行驶方向。
          // IE8以下不支持旋转，autoRotation属性无效
          // bubble: true,      //是否将覆盖物的鼠标或touch等事件冒泡到地图上 
          // draggable: true,  //设置点标记是否可拖拽移动，默认为false
          // clickable: true   //点标记是否可点击
          icon: new AMap.Icon({
            image: "assets/imgs/user.png", //用户自己头像
            size: new AMap.Size(52, 52),  //图标大小
            imageSize: new AMap.Size(26, 26)
          })
        },

      });
      that.map.addControl(geolocation);
      that.getGeoLocationPosition(geolocation);
    });




    for (let i = 0; i < that.waitressesMarkers.result.length; i++) {
      //添加标记
      var marker = new AMap.Marker({
        //map: that.map,
        title:that.waitressesMarkers.result[i].name,
        clickable:true,
        position: that.waitressesMarkers.result[i].position,
        icon: new AMap.Icon({
          image: that.waitressesMarkers.result[i].img,
          size: new AMap.Size(52, 52),  //图标大小
          imageSize: new AMap.Size(26, 26)
          
        })
      });
     that.makerArray.push(marker);
    }
    that.map.add(that.makerArray);
    for (let i = 0; i < that.makerArray.length; i++){
      that.makerArray[i].on('click',function(){
        that.showInTheCard={
          title:that.makerArray[i].getTitle(),
          position:that.makerArray[i].getPosition().toString(),
          img:that.makerArray[i].getIcon()
        }
        that.isShowTheCard=true;
        console.log(that.showInTheCard);
      })
    }
    

    that.map.plugin(["AMap.ToolBar"], function () {
      //加载工具条
      var tool = new AMap.ToolBar({
        position: 'RT',
        ruler: false,   //标尺键盘是否可见，默认为true
        //locate: false, //是否显示定位按钮，默认为false
        //liteStyle: false, //是否使用精简模式，默认为false
        direction: true,   //方向键盘是否可见，默认为true
        //autoPosition: true, //是否自动定位，即地图初始化加载完成后，是否自动定位的用户所在地，仅在支持HTML5的浏览器中有效，默认为false
        //useNative: true,  //是否使用高德定位sdk用来辅助优化定位效果，默认：false.

        // 仅供在使用了高德定位sdk的APP中，嵌入webview页面时使用

        // 注：如果要使用辅助定位的功能，除了需要将useNative属性设置为true以外，

        // 还需要调用高德定位idk中，AMapLocationClient类的startAssistantLocation()方法开启辅助H5定位功能；

        // 不用时，可以调用stopAssistantLocation()方法停止辅助H5定位功能。

        //locationMarker: Marker  //自定义定位图标，值为Marker对象
      });
      that.map.addControl(tool);
    });

    that.map.plugin(["AMap.Scale"], function () {
      var scale = new AMap.Scale({
        position: 'RT',
        offset: new AMap.Pixel(10, 50),
      });
      that.map.addControl(scale);
    });
  }
  loadMap() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        zoom: 11, //设置地图缩放级别
      //  rotateEnable: true,
        //showBuildingBlock: true,
        resizeEnable:true,   //是否监控地图容器尺寸变化，默认值为false
      })
    });
  }
  //获取定位方法
  getGeoLocationPosition(geolocation: any) {
    // get current position
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, 'complete', this.onComplete.bind(this));//返回定位信息      
    AMap.event.addListener(geolocation, 'error', (data) => {
      console.log('定位失败');
      console.log(data);
    });   //返回定位出错信息
  }
  onComplete(data) {
    // data是具体的定位信息
    // console.log(data);
    // console.log(data.position.toString());
    //   console.log(data.formattedAddress);
    this.postion = data.postion;
    this.accuracy = data.accuracy
    this.location_type = data.location_type;
  }

}
