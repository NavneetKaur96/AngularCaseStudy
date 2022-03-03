import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-countdown',
  templateUrl: './display-countdown.component.html',
  styleUrls: ['./display-countdown.component.scss']
})
export class DisplayCountdownComponent implements OnInit {
 @Input() countdown:number=0

  constructor() { }

  ngOnInit(): void {
  }

}
