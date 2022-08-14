import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({ secret: '123', cookie: { maxAge: 1000 * 60 * 60 * 24 }, saveUninitialized: false, resave: false, rolling: true }))
  await app.listen(3000);
}
bootstrap();
