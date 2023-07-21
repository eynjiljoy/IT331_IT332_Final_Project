import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'forgot-password-modal', loadChildren: () => import('./forgot-password-modal/forgot-password-modal.module').then(m => m.ForgotPasswordModalModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  {
    path: 'cans',
    loadChildren: () => import('./categories/cans/cans.module').then( m => m.CansPageModule)
  },
  {
    path: 'carton',
    loadChildren: () => import('./categories/carton/carton.module').then( m => m.CartonPageModule)
  },
  {
    path: 'gbottle',
    loadChildren: () => import('./categories/gbottle/gbottle.module').then( m => m.GbottlePageModule)
  },
  {
    path: 'paper',
    loadChildren: () => import('./categories/paper/paper.module').then( m => m.PaperPageModule)
  },
  {
    path: 'pbottle',
    loadChildren: () => import('./categories/pbottle/pbottle.module').then( m => m.PbottlePageModule)
  },
  {
    path: 'tire',
    loadChildren: () => import('./categories/tire/tire.module').then( m => m.TirePageModule)
  },
  {
    path: 'wrapper',
    loadChildren: () => import('./categories/wrapper/wrapper.module').then( m => m.WrapperPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IonicModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
