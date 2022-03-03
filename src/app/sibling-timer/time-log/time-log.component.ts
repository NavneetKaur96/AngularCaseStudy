import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-log',
  templateUrl: './time-log.component.html',
  styleUrls: ['./time-log.component.scss']
})
export class TimeLogComponent implements OnInit {
@Input() logs:{key:'S'|'P',date:Date,timer:number}[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
