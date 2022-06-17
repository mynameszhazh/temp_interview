import { Controller, Get } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello Midwayjs!';
  }
  @Get('/login')
  async login(): Promise<string> {
    return 'login!';
  }
}
