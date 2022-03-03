import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
@Input() started:number=0;
@Input() paused:number=0
  constructor() { }

  ngOnInit(): void {
  }

}
