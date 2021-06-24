import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Cat } from '@juge/type-api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Cat[] {
    return this.appService.getAllCats_notOptimized();
  }
}
