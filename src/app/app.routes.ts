import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: BlogsComponent },
  { path: 'detail', component: DetailPostComponent },
  { path: 'login', component: LoginComponent },
];
