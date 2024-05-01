import { HttpException, HttpStatus } from '@nestjs/common';

export class BookNotFoundException extends HttpException {
  constructor() {
    super('Book not found', HttpStatus.NOT_FOUND);
  }
}
