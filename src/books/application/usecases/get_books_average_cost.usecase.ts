import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { GetBooksAverageCostUseCaseContract } from "src/books/domain/contracts/usecases/get_books_average_cost_usecase.contract";
import { Book } from "src/books/domain/entities/book.entity";

@Injectable()
export class GetBooksAverageCostUseCase implements GetBooksAverageCostUseCaseContract {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(_: void): Promise<number> {
        let booksTotalCost: number = 0;
        const books = this.bookRepository.get();
        
        books.forEach((book) => {
            booksTotalCost += book.price;
        });

        return Number((booksTotalCost / books.length).toFixed(2));
    }
}