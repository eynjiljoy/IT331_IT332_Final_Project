import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrapperPage } from './wrapper.page';

const routes: Routes = [
  {
    path: '',
    component: WrapperPage
  },
  {
    path: 'prod1',
    loadChildren: () => import('./prod1/prod1.module').then( m => m.Prod1PageModule)
  },
  {
    path: 'prod2',
    loadChildren: () => import('./prod2/prod2.module').then( m => m.Prod2PageModule)
  },
  {
    path: 'prod3',
    loadChildren: () => import('./prod3/prod3.module').then( m => m.Prod3PageModule)
  },
  {
    path: 'prod4',
    loadChildren: () => import('./prod4/prod4.module').then( m => m.Prod4PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrapperPageRoutingModule {}
