import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { GetMoreExpensiveBooksThanPriceUseCaseContract } from "src/books/domain/contracts/usecases/get_more_expensive_books_than_price_usecase.contract";
import { Book } from "src/books/domain/entities/book.entity";
import { NoBooksFoundException } from "src/books/domain/exceptions/no_books_found.exception";

@Injectable()
export class GetMoreExpensiveBooksThanPriceUseCase implements GetMoreExpensiveBooksThanPriceUseCaseContract {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(price: number): Promise<Book[]> {
        const books = this.bookRepository.get();
        const filteredBooks = books.filter(book => book.price > price);
        if(filteredBooks.length === 0) throw new NoBooksFoundException();
        return filteredBooks;
    }
}