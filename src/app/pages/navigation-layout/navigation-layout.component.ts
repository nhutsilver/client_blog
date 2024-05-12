import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-navigation-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,HomeComponent, RouterOutlet, NgIf],
  templateUrl: './navigation-layout.component.html',
  styleUrl: './navigation-layout.component.scss',
})
export class NavigationLayoutComponent implements OnInit {
  isLoginPage: boolean = false;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    })
  }
}
