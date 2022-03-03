import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChildActivationStart } from '@angular/router';


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
  @Output() TimerValue=new EventEmitter<number>();
  @Output() StartCount=new EventEmitter<number>();
  @Output() PauseCount=new EventEmitter<number>();
  @Output() SPLog=new EventEmitter<{key:'S'|'P',date:Date,timer:number}[]>();
  interval:any;
  start:number=0;
  pause:number=0;
  ButtonClick:number=1;
  constructor() { }

  ngOnInit(): void {
   
  }
StartPause(){
  if(this.TimerValToSend!==0){
  this.disable=true;
if(this.ButtonClick % 2===0){
 this.pausedTimes.push({key:'P',date:new Date(),timer:this.TimerValToSend})
 this.SPLog.emit(this.pausedTimes);
this.pause++;
this.PauseCount.emit(this.pause);
this.PauseCounter();
}
else{
  this.pausedTimes.push({key:'S',date:new Date(),timer:this.TimerValToSend});
  this.SPLog.emit(this.pausedTimes);
this.start++;
this.StartCount.emit(this.start)

this.startCounter();
}

this.ButtonClick++;
  }
}
startCounter(){
 
  this.TimerValue.emit(this.TimerValToSend)
  this.interval=setInterval(()=>{
    if(this.TimerValToSend===0)
    {
      this.reset();
    }
    this.TimerValToSend && this.TimerValToSend--
    this.TimerValue.emit(this.TimerValToSend)
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
this.TimerValue.emit(this.TimerValToSend);
this.StartCount.emit(this.start);
this.PauseCount.emit(this.pause);
this.SPLog.emit(this.pausedTimes);
}

}
