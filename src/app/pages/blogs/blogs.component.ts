import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { ListPostsComponent } from '../../components/list-posts/list-posts.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [HeadingComponent, LogoComponent, ListPostsComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
