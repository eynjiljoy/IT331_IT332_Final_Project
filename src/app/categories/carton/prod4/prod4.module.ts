import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prod4PageRoutingModule } from './prod4-routing.module';

import { Prod4Page } from './prod4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prod4PageRoutingModule
  ],
  declarations: [Prod4Page]
})
export class Prod4PageModule {}
