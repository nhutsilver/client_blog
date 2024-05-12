
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports:[SidebarModule, ButtonModule, CommonModule, RouterLink, RouterLinkActive]
})
export class HeaderComponent {
    sidebarVisible: boolean = false;
}