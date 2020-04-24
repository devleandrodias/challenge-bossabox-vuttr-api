require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());

  app.enableCors();

  const ops = new DocumentBuilder()
    .setTitle('VUTTR API')
    .setDescription(
      'Challenge VUTTR (Very Useful Tools to Remember) - BossaBox',
    )
    .addBearerAuth()
    .addServer(process.env.BASE_URL)
    .setLicense('The MIT License', 'https://opensource.org/licenses/MIT')
    .setVersion('1.0.0')
    .addTag('tools')
    .setContact(
      'Leandro Dias',
      'https://app.bossabox.com/u/leandro-dias-y2fa86zp',
      'leandrodbdias@gmail.com',
    )
    .build();

  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, ops));

  await app.listen(process.env.PORT);
}

bootstrap();
