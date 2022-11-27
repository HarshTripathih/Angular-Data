import { Component, OnInit } from '@angular/core';
import { ComentserviceService } from 'src/app/services/comentservice.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
commentData:any=[];
  constructor(private comment:ComentserviceService) { 
    this.comment.getUserData().subscribe((data)=>{
      this.commentData = data
    })
  }

  ngOnInit(): void {
  }

}
