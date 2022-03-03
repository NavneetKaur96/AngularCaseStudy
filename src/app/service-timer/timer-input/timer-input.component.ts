import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { TimerServiceService } from '../timer-service.service';


@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent implements OnInit {

  InputVal:number=0;
  TimerValToSend:number=0;
  disable:boolean=false;
  pausedTimes:{key:'S'|'P',date:Date,timer:number}[]=[];
  
  interval:any;
  start:number=0;
  pause:number=0;
  ButtonClick:number=1;
  constructor(private timerService:TimerServiceService) { }

  ngOnInit(): void {
   
  }
StartPause(){
  if(this.TimerValToSend!==0){
  this.disable=true;
if(this.ButtonClick % 2===0){
 this.pausedTimes.push({key:'P',date:new Date(),timer:this.TimerValToSend})
 this.timerService.SPLog.next(this.pausedTimes);
this.pause++;
this.timerService.PauseCount.next(this.pause);
this.PauseCounter();
}
else{
  this.pausedTimes.push({key:'S',date:new Date(),timer:this.TimerValToSend});
  this.timerService.SPLog.next(this.pausedTimes);
this.start++;
this.timerService.StartCount.next(this.start)

this.startCounter();
}

this.ButtonClick++;
  }
}
startCounter(){
 
  this.timerService.TimerValue.next(this.TimerValToSend)
  this.interval=setInterval(()=>{
    if(this.TimerValToSend===0)
    {
      this.reset();
    }
    this.TimerValToSend && this.TimerValToSend--
    this.timerService.TimerValue.next(this.TimerValToSend)
  },1000)
}
PauseCounter(){
  clearInterval(this.interval)
}
reset(){
  this.disable=false
  this.PauseCounter();
this.InputVal=0;
this.TimerValToSend=0;
this.ButtonClick=1;
this.start=0;
this.pause=0;
this.pausedTimes=[]
this.timerService.TimerValue.next(this.TimerValToSend);
this.timerService.StartCount.next(this.start);
this.timerService.PauseCount.next(this.pause);
this.timerService.SPLog.next(this.pausedTimes);
}

}
