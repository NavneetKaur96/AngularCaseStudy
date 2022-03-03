import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerServiceService } from '../timer-service.service';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.scss']
})
export class DisplayCountdownComponent implements OnInit {
countdown:number=0
subs!: Subscription;
  constructor(private timerService:TimerServiceService) { }

  ngOnInit(): void {
    this.subs=this.timerService.TimerValue.subscribe(data=>this.countdown=data);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
}

}
