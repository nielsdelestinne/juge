import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Cat, Gender } from '@juge/type-api';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private cats = this.generateCats(50000);

  @Get()
  getData(): Cat[] {
    return this.cats;
  }

  private generateCats(amount = 50): Cat[] {
    const cats: Cat[] = [];
    for(let i = 0; i < amount; i++) {
      cats.push({
        name: 'Jim',
        age: i,
        isKeptIndoor: true,
        gender: Gender.MALE

      })
    }
    console.log('ready');
    return cats;
  }
}
