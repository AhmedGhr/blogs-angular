import { Component,OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
export interface Blog{
  id:number  
  title : string
  author:string
  content:string
  upvotes:number
  downvotes:number
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit  {
  blogs : Blog[] 

  constructor(private blogsService : BlogsService){}

  ngOnInit(): void {
    this.blogs = this.blogsService.getBlogs();
    console.log(this.blogs);
  }
}
