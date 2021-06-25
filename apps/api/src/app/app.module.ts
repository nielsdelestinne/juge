import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { generateCats } from './cat-generator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {provide: 'cats', useValue: generateCats(25000)}],
})
export class AppModule {}
