import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { RegisterDto } from './register.dto';

@Controller()
export class RegisterController {
  @Get()
  @Render('auth/register')
  create() {
    return;
  }

  @Post('auth/register')
  store(@Body() registerDto: RegisterDto) {
    return registerDto;
  }
}
