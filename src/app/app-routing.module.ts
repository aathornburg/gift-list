import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './flows/login/login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './flows/login/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'landing', loadChildren: './flows/main/landing/landing.module#LandingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
