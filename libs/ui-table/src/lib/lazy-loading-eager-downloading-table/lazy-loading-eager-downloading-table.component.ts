import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cat, Pageable } from '@juge/type-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'juge-ui-lazy-loading-eager-downloading-table',
  templateUrl: './lazy-loading-eager-downloading-table.component.html',
  styleUrls: ['./lazy-loading-eager-downloading-table.component.scss'],
})
export class LazyLoadingEagerDownloadingTableComponent implements OnDestroy {
  private pageInfo = {
    page: 0,
    size: 50,
  };
  @Input() dataCollection: any[] | null = [];

  @Input() set dataCollectionAll(value: any[] | null) {
    if (value != null) {
      const existingNames = this.dataCollection?.map((cat: Cat) => cat.name);
      this.allData = value
        ? value.filter(
            (cat: Cat) => !existingNames?.find((name) => name === cat.name)
          )
        : [];
      this.registerFilter();
    }
  }
  private allData: any[] = [];

  nameFilter: FormControl = new FormControl('');

  private filterSubscription: Subscription | undefined = undefined;

  private registerFilter() {
    this.filterSubscription = this.nameFilter.valueChanges.subscribe(name => {
      const copyOfAllDate = [...this.allData];
      this.dataCollection = copyOfAllDate.filter((cat: Cat) => cat.name == name);
      console.log(this.dataCollection);
    });
  }

  ngOnDestroy(): void {
    this.filterSubscription?.unsubscribe();
  }

  keys(element: any): any[] {
    return Object.keys(element);
  }

  onTableScroll($event: any) {
    const tableViewHeight = $event.target.offsetHeight; // viewport height
    const tableScrollHeight = $event.target.scrollHeight; // length of entire table
    const scrollLocation = $event.target.scrollTop; // how far has user scrolled

    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.pageInfo.page += 1;
      this.dataCollection?.push(
        ...this.allData.slice(
          this.pageInfo.page * this.pageInfo.size,
          this.pageInfo.page * this.pageInfo.size + this.pageInfo.size
        )
      );
    }
  }
}
