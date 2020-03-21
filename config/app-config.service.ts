import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { appConfig } from './app-config';

@Injectable()
export class AppConfigService {

  constructor() {
  }
  get appConfig(){
    return  of(appConfig);
  }
}