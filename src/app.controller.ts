import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @ApiExcludeEndpoint()
  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
