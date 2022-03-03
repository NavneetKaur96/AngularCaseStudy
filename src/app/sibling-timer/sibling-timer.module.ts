import { NgModule } from '@angular/core';


import { SiblingTimerRoutingModule } from './sibling-timer-routing.module';
import { SiblingTimerComponent } from './sibling-timer.component';
import { DisplayCountdownComponent } from './display-countdown/display-countdown.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { CountComponent } from './count/count.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SiblingTimerComponent,
    DisplayCountdownComponent,
    TimerInputComponent,
    TimeLogComponent,
    CountComponent
  ],
  imports: [
    SiblingTimerRoutingModule,
    MaterialModule
  ]
})
export class SiblingTimerModule { }
