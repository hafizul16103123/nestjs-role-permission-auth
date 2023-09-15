import { Injectable } from '@nestjs/common';
import  config  from './config';

@Injectable()
export class AppService {
  getHello(): string {
    console.log({config})
     return 'Welcome to auth service ' ;
  }
}
