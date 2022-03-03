import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiblingTimerComponent } from './sibling-timer.component';

const routes: Routes = [{ path: '', component: SiblingTimerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiblingTimerRoutingModule { }
