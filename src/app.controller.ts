import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req): string {
    console.log(req.session);
    req.session.user = "1"
    req.session.touch();
    return '123';
  }
}
