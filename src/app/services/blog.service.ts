import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogApiUrl = `${environment.apiUrl}/posts`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.blogApiUrl);
  }

  getPostBySlug(slug: string): Observable<Post> {
    return this.http.get<Post>(`${this.blogApiUrl}/${slug}`);


  }

  createPost(postData: { title: string; content: string }): Observable<Post> {
    return this.http.post<Post>(this.blogApiUrl, postData);
  }
}
