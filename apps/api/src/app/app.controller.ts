import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { Cat, Order } from '@juge/type-api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Cat[] {
    return this.appService.getAllCats_notOptimized();
  }

  @Get('pageable')
  getData_pageable(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('orderBy') orderBy: string,
    @Query('order') order: Order
  ): Cat[] {
    return this.appService.getAllCats_pageable({
      page: Number(page), size: Number(size), orderBy, order
    });
  }
}
