import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'juge-ui-lazy-loading-table',
  templateUrl: './lazy-loading-table.component.html',
  styleUrls: ['./lazy-loading-table.component.scss'],
})
export class LazyLoadingTableComponent {
  @Input() set dataCollection(value: any[] | null) {
    if(value != null) {
      if(this._dataCollection?.length && this.isFetchingData) {
        this._dataCollection.push(...value);
        this.isFetchingData = false;
      } else {
        this._dataCollection = value;
      }
    }
  }

  @Output() scrolledToBottom = new EventEmitter<void>();

  _dataCollection: any[] | null = null;

  private isFetchingData = false;

  keys(element: any): any[] {
    return Object.keys(element);
  }

  onTableScroll($event: any) {
    const tableViewHeight = $event.target.offsetHeight // viewport height
    const tableScrollHeight = $event.target.scrollHeight // length of entire table
    const scrollLocation = $event.target.scrollTop; // how far has user scrolled

    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit && !this.isFetchingData) {
      this.isFetchingData = true;
      this.scrolledToBottom.emit();
    }
  }
}
