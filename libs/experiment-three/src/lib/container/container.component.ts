import { Component } from '@angular/core';
import { Order, totalAmountOfCats } from '@juge/type-api';
import { ApiService } from '@juge/data-access-api';

@Component({
  selector: 'juge-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  size = 50;
  totalSize = totalAmountOfCats;

  catsFirstPage$ = this.apiService.findAllCats_pageable(this.pageable(this.size))
  catsAll$ = this.apiService.findAllCats_pageable(this.pageable(this.totalSize));

  constructor(private apiService: ApiService) {
  }

  private pageable(size: number) {
    return {
      page: 0,
      size: size,
      orderBy: 'name',
      order: Order.ASC
    }
  }

}
