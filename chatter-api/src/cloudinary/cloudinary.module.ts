import { Module } from '@nestjs/common';
import { Cloudinary } from './cloudinary';

@Module({
  providers: [CloudinaryService, Cloudinary],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
