import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { GetBookByIdUseCaseContract } from "src/books/domain/contracts/usecases/get_book_by_id_usecase.contract";
import { Book } from "src/books/domain/entities/book.entity";
import { BookNotFoundException } from "src/books/domain/exceptions/book_not_found.exception";

@Injectable()
export class GetBookByIdUseCase implements GetBookByIdUseCaseContract {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(id: string): Promise<Book> {
        const book = this.bookRepository.getOne(id);
        if (!book) throw new BookNotFoundException();
        return book;
    }
}