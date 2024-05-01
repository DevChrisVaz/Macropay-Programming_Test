import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { bookUseCasesProviders } from './application/usecases/providers';
import { mockRepositoryProvider } from './infrastructure/data/mock/provider';

@Module({
  controllers: [BooksController],
  providers: [
    mockRepositoryProvider,
    ...bookUseCasesProviders
  ],
})
export class BooksModule {}
