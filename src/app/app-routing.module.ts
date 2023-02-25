import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsdetailsComponent } from './blogsdetails/blogsdetails.component';
import { FormBlogComponent } from './form-blog/form-blog.component';

const routes: Routes = [{path:'form-blog',component:FormBlogComponent},
{path:'',component:BlogsComponent},
{path:'blogs-details/:id',component:BlogsdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
