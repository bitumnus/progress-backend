import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getList')
  getList(): object {
    return this.appService.getList();
  }

  @Get('/getRandom')
  async getRandom(): Promise<string> {
    return await this.appService.getRandom();
  }
}
