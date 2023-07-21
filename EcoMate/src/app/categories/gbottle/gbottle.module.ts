import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GbottlePageRoutingModule } from './gbottle-routing.module';

import { GbottlePage } from './gbottle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GbottlePageRoutingModule
  ],
  declarations: [GbottlePage]
})
export class GbottlePageModule {}
