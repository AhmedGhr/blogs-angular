import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BlogsService } from './blogs/blogs.service';
export interface Blog{
    id:number  
    title : string
    author:string
    content:string
    upvotes:number
    downvotes:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'blogs-elyadata';

  blogs : Blog[] 
  constructor(private router:Router, private blogService : BlogsService){}

gotoForm(){
  console.log("clicked")
  this.router.navigate(['/form-blog'])
}

gotoHome(){
  console.log("clicked")
  this.router.navigate(['/'])
}

  ngOnInit(): void{
     this.blogService.getBlogsApi().subscribe((data)=>this.blogs = data["items"]);
    
  }
}
