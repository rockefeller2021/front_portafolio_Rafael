import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-post-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-editor.html',
})
export class PostEditor implements OnInit {
  postForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      this.notificationService.showError('El título y el contenido no pueden estar vacíos.');
      return;
    }

    this.isSubmitting = true;
    this.blogService.createPost(this.postForm.value).subscribe({
      next: (newPost) => {
        this.notificationService.showSuccess('¡Artículo publicado con éxito!');
        // Navegamos a la página del nuevo post recién creado
        this.router.navigate(['/blog', newPost.slug]);
      },
      error: (err) => {
        this.notificationService.showError('Hubo un error al publicar el artículo.');
        this.isSubmitting = false;
        console.error(err);
      }
    });
  }
}
