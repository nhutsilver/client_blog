import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { AuthorInfoComponent } from '../../components/author-info/author-info.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [LogoComponent, AuthorInfoComponent, ContactFormComponent],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent {

}
