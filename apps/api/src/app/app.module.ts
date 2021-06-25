import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { generateCats } from './cat-generator';
import { totalAmountOfCats } from '@juge/type-api';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {provide: 'cats', useValue: generateCats(totalAmountOfCats)}],
})
export class AppModule {}
