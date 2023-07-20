import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CansPageRoutingModule } from './cans-routing.module';

import { CansPage } from './cans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CansPageRoutingModule
  ],
  declarations: [CansPage]
})
export class CansPageModule {}
