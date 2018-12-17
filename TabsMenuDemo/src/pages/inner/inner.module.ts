import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnerPage } from './inner';

@NgModule({
  declarations: [
    InnerPage,
  ],
  imports: [
    IonicPageModule.forChild(InnerPage),
  ],
})
export class InnerPageModule {}
