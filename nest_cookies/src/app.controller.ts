import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  setCookies(@Res({ passthrough: false }) res: Response) {
    res.cookie('token', 'token123', {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false,
      sameSite: 'none',
      secure: true,
      domain: 'https://cookiesreact.vercel.app',
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
