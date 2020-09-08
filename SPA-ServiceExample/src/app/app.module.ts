import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Router } from '@angular/router'

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

const appRoute:Route[]=[
  {
    path:'albums',
    component:AlbumsComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  },
  {
    path:'photos',
    component:PhotosComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'todos',
    component:TodosComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
