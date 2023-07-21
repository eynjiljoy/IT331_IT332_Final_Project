import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prod1Page } from './prod1.page';

const routes: Routes = [
  {
    path: '',
    component: Prod1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prod1PageRoutingModule {}
