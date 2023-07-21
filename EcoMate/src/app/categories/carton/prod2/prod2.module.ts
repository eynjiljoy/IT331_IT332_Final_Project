import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prod2PageRoutingModule } from './prod2-routing.module';

import { Prod2Page } from './prod2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prod2PageRoutingModule
  ],
  declarations: [Prod2Page]
})
export class Prod2PageModule {}
