import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prod1PageRoutingModule } from './prod1-routing.module';

import { Prod1Page } from './prod1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prod1PageRoutingModule
  ],
  declarations: [Prod1Page]
})
export class Prod1PageModule {}
