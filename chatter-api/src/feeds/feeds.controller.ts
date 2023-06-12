import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FeedsDto } from 'src/dto/feedsDto';
import { UserService } from 'src/user/user.service';
import { FeedsService } from './feeds.service';

@Controller('api/feeds')
export class FeedsController {
  constructor(
    private feedsService: FeedsService,
    private userService: UserService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createFeed(
    @Res() res,
    @Request() req,
    @Body() feedsDto: FeedsDto,
  ): Promise<{ feed: FeedsDto }> {
    try {
      const feeds = await this.feedsService.createFeeds(req.user.id, feedsDto);

      if (!feeds) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          error: 'error creating feed',
          message: 'Unable to create feed',
          status: 'error',
        });
      }

      return res.status(HttpStatus.OK).json({
        data: feeds,
        message: 'feeds created successfully',
        status: 'success',
      });
    } catch (error) {}
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getAllFeeds(@Res() response, @Req() request: Request) {
    const feeds = await this.feedsService.getAllFeeds();
    return response.status(HttpStatus.OK).json({
      data: feeds,
      message: 'feeds successfully retrieved',
      status: 'success',
    });
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getFeedById(@Res() response, @Param('id') id: string) {
    const feed = await this.feedsService.getFeedById(id);
    return response.status(HttpStatus.OK).json({
      data: feed,
      message: 'feed retrieved successfully',
      status: 'success',
    });
  }

  // writers update
  //   @Put()
}
