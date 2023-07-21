import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbottlePageRoutingModule } from './pbottle-routing.module';

import { PbottlePage } from './pbottle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbottlePageRoutingModule
  ],
  declarations: [PbottlePage]
})
export class PbottlePageModule {}
