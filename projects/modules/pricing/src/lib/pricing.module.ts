import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing.component';
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PricingComponent, CustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PricingComponent, CustomerComponent]
})
export class PricingModule { }
