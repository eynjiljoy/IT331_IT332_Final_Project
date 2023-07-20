import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prod3Page } from './prod3.page';

const routes: Routes = [
  {
    path: '',
    component: Prod3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prod3PageRoutingModule {}
