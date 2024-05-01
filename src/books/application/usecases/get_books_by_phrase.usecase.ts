import { Injectable } from "@nestjs/common";
import { BookRepositoryContract } from "src/books/domain/contracts/book_repository.contract";
import { GetBooksByPhraseUseCaseContract } from "src/books/domain/contracts/usecases/get_books_by_phrase_usecase.contract";
import { Book } from "src/books/domain/entities/book.entity";
import { NoBooksFoundException } from "src/books/domain/exceptions/no_books_found.exception";

@Injectable()
export class GetBooksByPhraseUseCase implements GetBooksByPhraseUseCaseContract {
    constructor(private readonly bookRepository: BookRepositoryContract) { }

    async run(phrase: string): Promise<Book[]> {
        const books = this.bookRepository.get();
        const filteredBooks = books.filter(book => {
            const authorName = book.author.toLowerCase();
            const phraseLetters = phrase.split('').filter(letter => /[a-zA-Z]/.test(letter));

            // Verificar si todas las letras de la frase están presentes en el nombre del autor
            return phraseLetters.every(letter => authorName.includes(letter));
        });

        if (filteredBooks.length === 0) throw new NoBooksFoundException();
        return filteredBooks;
    }
}