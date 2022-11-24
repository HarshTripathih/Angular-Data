import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mltclass = {
    class1:true,
    class2:true,
    class3:true
  }

  mltstyle ={
    'border-radius':'10px',
    'width':'30%',
    'height':'20vh'
  }
}
