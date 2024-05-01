import { HttpException, HttpStatus } from '@nestjs/common';

export class NoBooksFoundException extends HttpException {
  constructor() {
    super('No books found', HttpStatus.NOT_FOUND);
  }
}
