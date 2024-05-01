import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { CreateBookUseCaseContract } from "src/books/domain/contracts/usecases/create_book_usecase.contract";
import { Book } from "src/books/domain/entities/book.entity";

@Injectable()
export class CreateBookUseCase implements CreateBookUseCaseContract {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(book: Book): Promise<Book> {
        return this.bookRepository.create(book);
    }
}