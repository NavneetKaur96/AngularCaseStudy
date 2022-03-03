import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerServiceService } from '../timer-service.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
started:number=0;
paused:number=0;
subs1!: Subscription;
subs2!: Subscription;
  constructor(private timerService:TimerServiceService) { }

  ngOnInit(): void {
    this.subs1=this.timerService.StartCount.subscribe(data=>this.started=data);
    this.subs2=this.timerService.PauseCount.subscribe(data=>this.paused=data);
  }
  ngOnDestroy(): void {
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
}

}
