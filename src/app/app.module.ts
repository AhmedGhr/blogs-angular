import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBlogComponent } from './form-blog/form-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsdetailsComponent } from './blogsdetails/blogsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBlogComponent,
    BlogsComponent,
    BlogsdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
