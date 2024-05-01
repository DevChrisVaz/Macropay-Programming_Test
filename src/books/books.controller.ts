import { Controller, Get, Post, Body, Param, Query, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { CreateBookDto } from './application/dto/create-book.dto';
import { GetBooksUseCaseContract } from './domain/contracts/usecases/get_books_usecase.contract';
import { GetBookByIdUseCaseContract } from './domain/contracts/usecases/get_book_by_id_usecase.contract';
import { GetMoreExpensiveBooksThanPriceUseCaseContract } from './domain/contracts/usecases/get_more_expensive_books_than_price_usecase.contract';
import { AddUUIDInterceptor } from 'src/common/interceptors/add-uuid.interceptor';
import { CreateBookUseCaseContract } from './domain/contracts/usecases/create_book_usecase.contract';
import { GetBooksAverageCostUseCaseContract } from './domain/contracts/usecases/get_books_average_cost_usecase.contract';
import { GetBooksByPhraseUseCaseContract } from './domain/contracts/usecases/get_books_by_phrase_usecase.contract';
import { BookQueryDto } from './application/dto/book_query.dto';

@Controller('books')
export class BooksController {
  constructor(
    private readonly getBooksUseCase: GetBooksUseCaseContract,
    private readonly getBookByIdUseCase: GetBookByIdUseCaseContract,
    private readonly getMoreExpensiveBooksThanPriceUseCase: GetMoreExpensiveBooksThanPriceUseCaseContract,
    private readonly createBookUseCase: CreateBookUseCaseContract,
    private readonly getBooksAverageCostUseCase: GetBooksAverageCostUseCaseContract,
    private readonly getBooksByPhraseUseCase: GetBooksByPhraseUseCaseContract
  ) { }

  @Post()
  @UseInterceptors(AddUUIDInterceptor)
  create(@Body() createBookDto: CreateBookDto) {
    return this.createBookUseCase.run(createBookDto);
  }

  @Get()
  findAll(@Query(new ValidationPipe()) query: BookQueryDto) {
    if (query.price) {
      return this.getMoreExpensiveBooksThanPriceUseCase.run(query.price);
    }
    if (query.phrase) {
      return this.getBooksByPhraseUseCase.run(query.phrase);
    }
    return this.getBooksUseCase.run();
  }

  @Get("/average")
  async getAverageCost() {
    const average = await this.getBooksAverageCostUseCase.run();
    return { average };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
     this.getBookByIdUseCase.run(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
