import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prod2Page } from './prod2.page';

const routes: Routes = [
  {
    path: '',
    component: Prod2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prod2PageRoutingModule {}
