import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prod4Page } from './prod4.page';

const routes: Routes = [
  {
    path: '',
    component: Prod4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prod4PageRoutingModule {}
