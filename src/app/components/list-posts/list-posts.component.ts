import { Component } from '@angular/core';
import { PaginatorModule } from "primeng/paginator";
@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent {
  public rows: number = 1;
  public totalRecords: number = 3;
  paginate = ($event: any)  => {
    console.log('paginate event: ', $event);
  }
}
