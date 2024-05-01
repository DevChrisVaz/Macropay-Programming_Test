import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { Book } from "src/books/domain/entities/book.entity";

@Injectable()
export class GetBooksUseCase implements GetBooksUseCase {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(_: void): Promise<Book[]> {
        return this.bookRepository.get();
    }
}