import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService, Post } from '../../services/blog.service';
import { Observable, switchMap } from 'rxjs';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, MarkdownModule],
  templateUrl: './blog-post.html',
})
export class BlogPostComponent implements OnInit {
  post$!: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug')!;
        return this.blogService.getPostBySlug(slug);
      })
    );
  }
}
