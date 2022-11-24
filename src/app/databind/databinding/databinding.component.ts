import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynName:string = "Harsh"

  myMethode(){
    return "my Name is " + this.dynName
  }
  appStatus:Boolean = true
  status1 = "Online";
  status2 = "offline";
 
  dissableBox = true
  enableBox(){
    this.dissableBox = false
  }
  hiddenBox = true
  showBox(){
    this.hiddenBox = false
  }
}
