import {
  Controller,
  Get,
  Res,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile/:userId')
  async getUser(@Res() res, @Request() req, @Param('userId') userId: string) {
    try {
      const foundUser = await this.userService.findById(userId);
      res.status(200).json({
        data: foundUser,
        status: 'success',
        message: 'User details gotten successfully',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
