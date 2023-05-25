import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Book } from './book.model';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  private books: Book[] = [];
  constructor(
    @InjectModel('Book')
    private readonly bookModel: Model<Book>,
  ) {}

  // emulate post
  async create(book: Book): Promise<Book> {
    const response = await this.bookModel.create(book);
    return response;
  }
}
