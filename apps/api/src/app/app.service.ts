import { Injectable } from '@nestjs/common';
import { Cat, Gender } from '@juge/type-api';

@Injectable()
export class AppService {
  private cats = this.generateCats(25000);

  getAllCats_notOptimized(): Cat[] {
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
    return cats;
  }
}
