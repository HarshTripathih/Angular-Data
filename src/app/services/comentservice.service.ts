import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentserviceService {

  constructor(private http:HttpClient) { }
  getUserData(){
    let apiurl="https://jsonplaceholder.typicode.com/comments";
    return this.http.get(apiurl)
  }
}
