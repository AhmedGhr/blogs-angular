import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../app.component';
import { BlogsService } from '../blogs/blogs.service'
@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private blogsService: BlogsService) {}

 blog: Blog;
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id']);
      
   this.blog= this.blogsService.getBlogById(id);
    });
  }
}
