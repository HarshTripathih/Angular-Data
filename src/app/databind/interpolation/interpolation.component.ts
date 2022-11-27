import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//changes
firstname = 'Harsh';
lastname = 'Tripathi';
email = 'harshtripathih321@gmail.com';
success = 'success';
error = 'error';
hashError = true;
msg = '';
getName() {
  return this.firstname
}
obj = {
  name: 'kelly',
  age: 20
}

arr = ['bruce', 'tonny', 'jalaj', 'ujjwal']

myName:string = "Harsh";
}
