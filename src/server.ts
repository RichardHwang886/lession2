import { NestFactory } from '@nestjs/core';
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as passport from 'passport'
import { appConfig } from '../config/app-config';
import { ApplicationModule } from './modules/app.module';
// import { RedisIoAdapter } from './lib';


const port = appConfig.port;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(cors());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(passport.initialize());
  // app.useWebSocketAdapter(new RedisIoAdapter(app))
  await app.listen(port).then(() => {
    console.log(`listen on ${port} tcp port!!`);
  })
}

bootstrap();
