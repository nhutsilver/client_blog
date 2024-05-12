import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <input type="text" [(ngModel)]="parentData">
    <app-child [childData]="parentData" (childEvent)="onChildEvent($event)"></app-child>
  `,
})
export class ParentComponent {
  parentData: string;

  onChildEvent(data: string) {
    console.log('Data from child:', data);
  }
}