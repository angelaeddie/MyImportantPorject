import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuOnePage } from './menu-one';

@NgModule({
  declarations: [
    MenuOnePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuOnePage),
  ],
})
export class MenuOnePageModule {}
