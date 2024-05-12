import { EventEmitter, Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Author } from './authors';
@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss'
})
export class AuthorDetailComponent implements OnInit, OnChanges {
  @Input() item = '';
  ngOnInit(): void {

  }
  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();
  inputData: string;
  ngOnChanges(changes: SimpleChanges): void {

  }
  onInputChange(value: string) {
    this.childEvent.emit(value);
  }
}
