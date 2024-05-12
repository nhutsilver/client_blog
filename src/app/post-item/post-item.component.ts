import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent implements OnInit {
  @Input() post: any;
  constructor() {

  }
  ngOnInit(): void {
  }
}
