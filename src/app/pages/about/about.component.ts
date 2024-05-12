import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, LogoComponent, ContactFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
