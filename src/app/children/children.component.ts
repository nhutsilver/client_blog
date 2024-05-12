import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent implements OnInit, OnChanges {
  @Input() name: string | undefined;
  @Input() age: number | undefined;
  constructor() {
  }
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
