import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import * as fs from "fs";
import { Book } from "src/books/domain/entities/book.entity";

@Injectable()
export class MockBookRepository implements BookRepositoryContract, OnApplicationBootstrap {
    private data: Array<Book> = [];

    onApplicationBootstrap() {
        this.data = JSON.parse(fs.readFileSync("./src/books/infrastructure/data/mock/MOCK_DATA.json", "utf8"));
    }

    get(): Book[] {
        return this.data;
    }

    getOne(id: string): Book | null {
        return this.data.find(b => b.id === id);
    }

    create(book: Book): Book {
        this.data.push(book);
        return book;
    }
}