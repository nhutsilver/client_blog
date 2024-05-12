import { Component } from '@angular/core';
import {  } from '@angular/forms';
@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})

export class CardInfoComponent {
  public name = 123;
  public value = 15;
  showAlertFnc = () => {
    alert('Show alert: ');
  }
}
