import { Component, NgModule } from '@angular/core';
import { NavigationLayoutComponent } from './pages/navigation-layout/navigation-layout.component';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationLayoutComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client_blog';
}
