import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
  
    StudentRoutingModule,
    MaterialModule
 
   
  ]
})
export class StudentModule { }
