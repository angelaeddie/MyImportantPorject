import { NgModule } from '@angular/core';
import { NavTopComponent } from './nav-top/nav-top';
import { BrowserModule } from '@angular/platform-browser';/*引入指令组件*/
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [NavTopComponent],
	imports: [IonicModule,
		BrowserModule/*模块导入组件*/
	],
	exports: [NavTopComponent]
})
export class ComponentsModule {}
