import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartonPageRoutingModule } from './carton-routing.module';

import { CartonPage } from './carton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartonPageRoutingModule
  ],
  declarations: [CartonPage]
})
export class CartonPageModule {}
