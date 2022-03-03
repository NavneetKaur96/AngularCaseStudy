import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerServiceService {

  constructor() { }
   TimerValue=new Subject<number>();
  StartCount=new Subject<number>();
 PauseCount=new Subject<number>();
  SPLog=new Subject<{key:'S'|'P',date:Date,timer:number}[]>();
 
}
