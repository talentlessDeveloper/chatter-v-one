import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://badmus:olawole27@cluster1.ondgqvx.mongodb.net/',
    ),
    UserModule,
    AuthModule,
    CloudinaryModule,
    EmailModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
