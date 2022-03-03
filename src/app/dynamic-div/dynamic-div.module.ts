import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div.component';

@NgModule({
  declarations: [
    DynamicDivComponent,
    
  ],
  imports: [
    DynamicDivRoutingModule,
    MaterialModule
  ]
})
export class DynamicDivModule { }
