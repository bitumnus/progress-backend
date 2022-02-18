import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getList')
  async getList(): Promise<object> {
    try {
      return this.appService.getList();
    } catch (e) {
      console.error('Error while get data');
      return new Error('Load fail');
    }
  }

  @Get('/getRandom')
  async getRandom(): Promise<string> {
    try {
      return await this.appService.getRandom();
    } catch (e) {
      console.error('Error while get random');
      return 'Fail get random';
    }
  }
}
