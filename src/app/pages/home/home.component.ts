import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ListPostsComponent } from '../../components/list-posts/list-posts.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { HighlightPostComponent } from '../../components/highlight-post/highlight-post.component';
import { CategoryComponent } from '../../components/category/category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, HeroComponent, ListPostsComponent, HeadingComponent, HighlightPostComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
