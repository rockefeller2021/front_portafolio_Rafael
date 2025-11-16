import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService, Post } from '../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.html',
})
export class BlogListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.getPosts();
  }
}
