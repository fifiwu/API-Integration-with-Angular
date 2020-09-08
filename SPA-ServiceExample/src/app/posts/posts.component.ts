import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../Providers/post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  arrData:any;
  
  constructor(private _postService:PostServiceService) {
    this.arrData=[];    
   }

  ngOnInit(): void {
    this._postService.getPosts().subscribe(
      (res)=>{
        this.arrData = res;
      },
      (err)=>{
        console.log("Found the ERROR : "+err);
      }

    );
  }

}
