import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import  config  from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.app.port
  console.log({config});
  await app.listen(port);
}
bootstrap();
