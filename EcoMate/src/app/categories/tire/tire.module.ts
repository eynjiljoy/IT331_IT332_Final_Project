import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TirePageRoutingModule } from './tire-routing.module';

import { TirePage } from './tire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TirePageRoutingModule
  ],
  declarations: [TirePage]
})
export class TirePageModule {}
