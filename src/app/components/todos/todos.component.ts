import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
tododata:any=[]
  constructor(private todos:TodosService) { 
    this.todos.getTodoData().subscribe(data=>{
      this.tododata = data
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

}
