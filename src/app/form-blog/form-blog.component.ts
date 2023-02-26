import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';
@Component({
  selector: 'app-form-blog',
  templateUrl: './form-blog.component.html',
  styleUrls: ['./form-blog.component.css']
})
export class FormBlogComponent {
  



  constructor(private fb: FormBuilder , private blogsService : BlogsService , private router : Router) {}
  blogForm: FormGroup;
  blogs: any[] = [];
  ngOnInit() {
    //this.blogs = this.blogsService.getBlogs()
    //console.log(this.blogs);

    this.blogForm = this.fb.group({
      id:Math.floor(Math.random()* 100),
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      upvotes: [0],
      downvotes: [0],
    });
  }

  onSubmit() {
    // add the form values to the blogs array
    if (this.blogForm.valid) {
      // Submit form data
      this.blogs.push(this.blogForm.value);
    //this.blogsService.addBlog(this.blogForm.value)
    this.blogsService.addBlogFastAPI(this.blogForm.value)
    // reset the form
    this.blogForm.reset();

    //redirect to blogs list page
    this.router.navigate(['/'])
    }
    
    


  }
}
