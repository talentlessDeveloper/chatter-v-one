import { Body, Controller, Post } from '@nestjs/common';

// import { Book } from './book.model';

// import { createBookDto } from './dto/createBookDto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Body('title') bookTitle: string) {
    return this.bookService.create({
      title: bookTitle,
      description: '',
      price: 0,
    });
  }
}
