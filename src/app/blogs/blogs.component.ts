import { Component,Input,OnInit } from '@angular/core';
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
  searchTerm: string = '';
  searchResults: Blog[] = [];
  constructor(private blogsService : BlogsService, private router : Router){
   
  }



  
  search() {
     this.searchResults = this.searchResults.filter((blog) => {
      const searchValue = this.searchTerm.toLowerCase();
      const title = blog.title.toLowerCase();
     const author = blog.author.toLowerCase();
    const content = blog.content.toLowerCase();
    return title.includes(searchValue) || author.includes(searchValue) || content.includes(searchValue);
   });
  }



goToDetails(){
  this.router.navigate(['/blogs-details'])
}


onSearchTermChanged(event: Event) {
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.getBlogs(this.searchTerm);
  
}


getBlogs(searchTerm? : string){
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
    if(this.blogs.length>0){
      this.blogs = this.blogs.filter((blog) => {
        if (!searchTerm) {
          // If no search term is provided, return all blogs
          return true;
        }
        // Otherwise, search by title, author, or content
        const title = blog.title.toLowerCase()
        const author = blog.author.toLowerCase()
        const content = blog.content.toLowerCase()
        return (
          title.includes(searchTerm) ||
          author.includes(searchTerm) ||
          content.includes(searchTerm)
        );
      });
    }
      
    
    }
    
  }
  
  )

  
}

deleteBlogAPI(id:number){
  alert(`do you really want to delete the post?`)
  
}

getBorderColor(upvotes: number, downvotes: number) {
  return (upvotes > downvotes) ? "green" : (upvotes < downvotes) ? "red" : "grey";
}


showAlert(id: number) {
  // Display an alert dialog box with a message and OK/Cancel buttons
  var result = confirm("Are you sure you want to delete the blog?");

  // Check the result of the alert dialog box
  if (result == true) {
    // If OK button is clicked, perform an action
    this.blogsService.deleteblogAPI(id).subscribe((result)=>console.log(result));
    this.getBlogs()
  } else {
    // If Cancel button is clicked, do nothing
    this.getBlogs()
  }
}


  ngOnInit(){
    
    this.getBlogs()
    
    //console.log(dataObbservable.subscribe((data)=>data['items']))

    //this.blogs = this.blogsService.getBlogs();

   
    
  }
  
}
