import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './book.service';
import { bookSchema } from './book.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'book',
        schema: bookSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
