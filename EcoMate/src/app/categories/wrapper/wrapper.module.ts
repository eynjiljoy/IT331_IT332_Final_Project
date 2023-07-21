import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrapperPageRoutingModule } from './wrapper-routing.module';

import { WrapperPage } from './wrapper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrapperPageRoutingModule
  ],
  declarations: [WrapperPage]
})
export class WrapperPageModule {}
