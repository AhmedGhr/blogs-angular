import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Blog{
  id:number  
  title : string
  author:string
  content:string
  upvotes:number
  downvotes:number
}
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiBaseUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  
  private blogs : Blog[] = [
    {id:1,title:"Title 1",author:"Ahmed",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",downvotes:0,upvotes:5},
    {id:2,title:"Title 2",author:"Ahmed",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",downvotes:0,upvotes:5},
    {id:3,title:"Title 3 ",author:"Ahmed",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",downvotes:0,upvotes:5},
    {id:4,title:"Title 4",author:"Ahmed",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",downvotes:0,upvotes:5},

]


  addBlogFastAPI(blog:Blog){
    const url = `${this.apiBaseUrl}/blog`;

    // Define the request body
    const body = {
      "id":blog.id,
      "author":blog.author,
      "title": blog.title,
      "content": blog.content,
      "upvotes":blog.upvotes,
      "downvotes":blog.downvotes,
    };
    console.log(this.http.post(url, body).subscribe((response)=>{
      response
    }))
    // Send the POST request to the API endpoint
    return this.http.post(url, body);
  }
  

  getBlogsApi(){
     const url = `${this.apiBaseUrl}/blogs`;

     return this.http.get<any[]>(url);
  }


  getBlogs() {
    return this.blogs;
  }

  addBlog(blog:Blog){
    this.blogs.push(blog);
  }

  getBlogById(id:number):Blog{

      return this.blogs.find(blog => blog.id === id)
      
  }

  getBlogByIdAPI(id:number){
    const url = `${this.apiBaseUrl}/blogs/${id}`;
    return this.http.get<any[]>(url);
  }
}

