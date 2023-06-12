import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedsDto } from 'src/dto/feedsDto';
import { Feeds } from 'src/schema/feeds.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CommentsService } from 'src/comments/comments.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(Feeds.name)
    private feedModel: Model<Feeds>,
    private cloudinaryService: CloudinaryService,
    private commentService: CommentsService,
    private userService: UserService,
  ) {}

  async createFeeds(userId: string, feedsDto: FeedsDto) {
    try {
      const createFeed = {
        ...feedsDto,
      };
      const newFeeds = await this.feedModel.create(createFeed);
      newFeeds.author = userId;
      if (newFeeds.image) {
        newFeeds.image = (
          await this.cloudinaryService.convertImageToCloudinary(newFeeds.image)
        ).url;
      }
      console.log(newFeeds);
      await newFeeds.save();
      return newFeeds;
    } catch (error) {
      throw error;
    }
  }

  async getAllFeeds() {
    return await this.feedModel.find({});
  }

  async getFeedById(id: string) {
    return await this.feedModel.findById({ _id: id });
  }
}
