import { Component, Input } from '@angular/core';

@Component({
  selector: 'juge-ui-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {

  @Input() dataCollection: any[] | null = [];

  keys(element: any): any[] {
    return Object.keys(element);
  }
}
