import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1,"name":"Andrew","age":30},
      {"id":2,"name":"Siddharth","age":25},
      {"id":3,"name":"Nikhil","age":27},
      {"id":4,"name":"Jalaj","age":20},
    ];
  }
}
