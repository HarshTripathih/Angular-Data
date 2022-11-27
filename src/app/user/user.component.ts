import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public employees = {};
  constructor(private _employeeService: UsersServiceService) { }

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
  }

}
