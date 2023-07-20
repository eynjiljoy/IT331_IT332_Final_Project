import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prod3PageRoutingModule } from './prod3-routing.module';

import { Prod3Page } from './prod3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prod3PageRoutingModule
  ],
  declarations: [Prod3Page]
})
export class Prod3PageModule {}
