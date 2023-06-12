import { Module } from '@nestjs/common';
import { FeedsController } from './feeds.controller';
import { FeedsSchema } from 'src/schema/feeds.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedsService } from './feeds.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Feeds',
        schema: FeedsSchema,
      },
    ]),
  ],
  providers: [FeedsService],
  controllers: [FeedsController],
})
export class FeedsModule {}
