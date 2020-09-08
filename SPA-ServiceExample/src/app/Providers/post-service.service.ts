import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private _httpClient:HttpClient) { }

  getPosts(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getComments(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/comments");
  }

  getPhotos(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/photos");
  }

  getAlbums(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/albums");
  }

  getToDos(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos");
  }

  getUsers(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
