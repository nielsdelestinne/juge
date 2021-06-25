import { Inject, Injectable } from '@nestjs/common';
import { Cat, Gender, Order } from '@juge/type-api';
import { Pageable } from '@juge/type-api';

@Injectable()
export class AppService {

  constructor(@Inject('cats') private cats: Cat[]) {}

  getAllCats_notOptimized(): Cat[] {
    return this.cats;
  }

  getAllCats_pageable(pageable: Pageable) {
    return this.cats
      .sort((aCat, otherCat) => aCat[pageable.orderBy].localeCompare(otherCat[pageable.orderBy]) * AppService.order(pageable.order))
      .slice(pageable.page * pageable.size, pageable.page * pageable.size + pageable.size)
  }

  private static order(order: Order): number {
    return order === Order.ASC ? 1 : -1;
  }
}
