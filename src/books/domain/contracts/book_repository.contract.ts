import { Book } from "../entities/book.entity";

export abstract class BookRepositoryContract {
    abstract get(): Array<Book>;
    abstract getOne(id: string): Book | null;
    abstract create(book: Book): Book;
}