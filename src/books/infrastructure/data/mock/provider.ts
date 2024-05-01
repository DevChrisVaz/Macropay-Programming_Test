import { Provider } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { MockBookRepository } from "./mock_book.repository";

export const mockRepositoryProvider: Provider = {
    provide: BookRepositoryContract,
    useClass: MockBookRepository
}