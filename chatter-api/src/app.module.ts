import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { env } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://kareemchatter:kareemchatter1@chatterdb.1szv5ev.mongodb.net/',
    ),
    UserModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, BookService],
})
export class AppModule {}
