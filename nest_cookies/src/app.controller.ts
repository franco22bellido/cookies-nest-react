import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  setCookies(@Res() res: Response) {
    res.cookie('token', 'token123', {
      secure: true,
      sameSite: 'none',
      maxAge: 10000,
    });
    res.status(200).json({ message: 'login ok', status: 200 });
  }
  @Get()
  getCookies(@Req() request: Request) {
    console.log(request.cookies);
    return request.cookies;
  }
  @Get('/navegar')
  navegar() {
    return { message: 'navegando...' };
  }
}
