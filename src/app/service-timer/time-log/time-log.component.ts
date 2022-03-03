import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerServiceService } from '../timer-service.service';

@Component({
  selector: 'app-time-log',
  templateUrl: './time-log.component.html',
  styleUrls: ['./time-log.component.scss']
})
export class TimeLogComponent implements OnInit,OnDestroy {
logs:{key:'S'|'P',date:Date,timer:number}[]=[]
  constructor(private timerService:TimerServiceService) { }
  subs!: Subscription;
  ngOnInit(): void {
    this.subs=this.timerService.SPLog.subscribe(data=>this.logs=data);
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

}
