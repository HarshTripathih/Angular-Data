import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private http:HttpClient) {}
    ngOnInit(): void {
      this.http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((data)=>console.log(data))
    }

  }
