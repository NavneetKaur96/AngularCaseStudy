import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling-timer',
  templateUrl: './sibling-timer.component.html',
  styleUrls: ['./sibling-timer.component.scss']
})
export class SiblingTimerComponent implements OnInit {

  constructor() { }
TimeValue:number=0;
Reset:boolean=false;
StartCount:number=0;
PauseCount:number=0;
SPLog:{key:'S'|'P',date:Date,timer:number}[]=[];
  ngOnInit(): void {
  }
TimerValue(val:number){
this.TimeValue=val
}
}
