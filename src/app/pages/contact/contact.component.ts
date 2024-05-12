import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LogoComponent, HeadingComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
