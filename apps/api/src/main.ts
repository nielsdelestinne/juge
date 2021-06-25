/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  configureCompression(app, true);
  configureETags(app, true);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();

function configureETags(app: INestApplication, enable: boolean) {
  app.getHttpAdapter().getInstance().set('etag', enable);
}

function configureCompression(app: INestApplication, enable: boolean) {
  if(enable) {
    app.use(compression());
  }
}
