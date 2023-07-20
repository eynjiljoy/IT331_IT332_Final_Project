import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
 

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [

        {
          path: 'list',
          loadChildren: () => import('../screen/list/list.module').then( m => m.ListPageModule)
        },
        {
          path:'',
          redirectTo:'list',
          pathMatch:'full',
        }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
