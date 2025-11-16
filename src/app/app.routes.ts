import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { BlogListComponent } from './pages/blog-list/blog-list';
import { BlogPostComponent } from './pages/blog-post/blog-post';
import { PostEditor } from './pages/post-editor/post-editor';

// ...

export const routes: Routes = [
  {
    path: '',
    // Ahora, cuando la ruta es la principal, el router pondrá
    // el LayoutComponent DENTRO del <router-outlet>
    component: Layout
  },
  {
    path: 'blog',
    // Y cuando la ruta sea /blog, el router QUITARÁ el LayoutComponent
    // y en su lugar pondrá el BlogListComponent DENTRO del <router-outlet>
    component: BlogListComponent
  },
  {
    path: 'blog/:slug',
    component: BlogPostComponent
  },
  { path: 'escribir',
    component: PostEditor },
    { path: '**'
      , redirectTo: ''
      , pathMatch: 'full' }
  // ... resto de las rutas
];
