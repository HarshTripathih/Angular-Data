import { Component } from '@angular/core';
// import { DatabindingComponent } from './databind/databinding/databinding.component';


@Component({
  selector: 'app-root',
  // directives: [DatabindingComponent],
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';
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
  
}
