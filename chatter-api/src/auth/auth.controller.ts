import {
  Body,
  Controller,
  Post,
  HttpStatus,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/dto/signUpDto';
import { LoginDto } from 'src/dto/loginDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(
    @Res() response,
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; user: any }> {
    try {
      const user = await this.authService.login(loginDto);

      if (user) {
        return response.status(HttpStatus.OK).json({
          data: user,
          message: 'login successful',
          status: 'success',
        });
      } else {
        return response.status(HttpStatus.BAD_REQUEST).json({
          error: 'unauthorized email and password',
          message: user,
          status: 'error',
        });
      }
    } catch (error) {
      console.log(error, 'backend');
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({
          error: true,
          message: error.message,
          status: 'error',
        })
        .send();
    }
  }
}
