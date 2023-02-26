import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  blogs : Blog[] ;
  blogsTest : any[];
  constructor(private blogsService : BlogsService, private router : Router){
   
  }


goToDetails(){
  this.router.navigate(['/blogs-details'])
}

  ngOnInit(){


    
    this.blogsService.getBlogsApi().subscribe({
      next: (data) => {
        this.blogs = data["items"].map(blog => {
          const newBlog: Blog = {
            id: blog.id,
            title: blog.title,
            author: blog.author,
            content: blog.content,
            upvotes: blog.upvotes,
            downvotes: blog.downvotes
          };
          return newBlog;
        });
      }
    }
    )
    //console.log(dataObbservable.subscribe((data)=>data['items']))

    //this.blogs = this.blogsService.getBlogs();
    
  }
}
