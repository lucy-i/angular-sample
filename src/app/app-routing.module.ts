import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';


const routes: Routes = [{
  path: 'account',
  loadChildren: () => import('./un-auth/un-auth-routing.module').then(t => t.UnAuthRoutingModule)
}, {
  path: 'app',
  loadChildren: () => import('./auth/auth-routing.module').then(t => t.AuthRoutingModule)
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
