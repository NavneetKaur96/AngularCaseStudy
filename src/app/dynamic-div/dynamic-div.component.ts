import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  DivArray=[1];
@HostListener('window:scroll',['$event']) ScrollOn(){
// if(this.ReachedBottom()){
this.DivArray.push(1)
//}
}
ReachedBottom():boolean{
  return (window.innerHeight + window.scrollY) == document.body.scrollHeight;
}
showAlert(index:number){
alert("Button in "+index+"thdiv clicked")
}
}
