import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3034/api/profile
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes()
  await app.listen(3034);
}
bootstrap();
