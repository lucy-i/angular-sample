import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './pricing.component';
import { CustomerComponent } from './customer/customer.component';
import { PricingModule } from './pricing.module';

const routes: Routes = [{
  path: '', component: PricingComponent,
  children: [{
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'prefix'
  }],
}, {
  path: '**',
  redirectTo: 'customer',
  pathMatch: 'prefix'
}];

@NgModule({
  imports: [PricingModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class PricingRoutingModule { }
