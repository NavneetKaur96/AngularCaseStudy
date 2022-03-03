import { NgModule } from '@angular/core';
import { ServiceTimerRoutingModule } from './service-timer-routing.module';
import { ServiceTimerComponent } from './service-timer.component';
import { CountComponent } from './count/count.component';
import { DisplayCountdownComponent } from './display-countdown/display-countdown.component';
import { TimeLogComponent } from './time-log/time-log.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    ServiceTimerComponent,
    DisplayCountdownComponent,
    TimerInputComponent,
    TimeLogComponent,
    CountComponent
  ],
  imports: [
    ServiceTimerRoutingModule,
    MaterialModule
  ]
})
export class ServiceTimerModule { }
