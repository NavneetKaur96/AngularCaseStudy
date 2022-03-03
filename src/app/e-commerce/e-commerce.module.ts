import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ECommerceComponent } from './e-commerce.component';

import { FilterProductsPipe } from './filter-products.pipe';
@NgModule({
  declarations: [
    ECommerceComponent,
    FilterProductsPipe
  ],
  imports: [
    ECommerceRoutingModule,
    MaterialModule
   
  ]
})
export class ECommerceModule { }
