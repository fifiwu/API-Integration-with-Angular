import { Component, OnInit } from '@angular/core';
import { PostServiceService  } from "../Providers/post-service.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  arrData:any;
  constructor(private _postService:PostServiceService) { 
    this.arrData = [];    
  }

  ngOnInit(): void {

    this._postService.getAlbums().subscribe(
        (res)=>{
          this.arrData = res;
        },
        (err)=>{
          console.log("FOUND ERROR "+err);
        }
    );

  }

}
