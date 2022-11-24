import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uname:string="Harsh";
  mltstl ={
        'font-size':'30px',
        'color':'3px solid red'


  }
}
