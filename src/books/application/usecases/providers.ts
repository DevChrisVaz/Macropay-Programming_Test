import { Provider } from "@nestjs/common";
import { GetBooksUseCaseContract } from "src/books/domain/contracts/usecases/get_books_usecase.contract";
import { GetBooksUseCase } from "./get_books.usecase";
import { GetBookByIdUseCaseContract } from "src/books/domain/contracts/usecases/get_book_by_id_usecase.contract";
import { GetBookByIdUseCase } from "./get_book_by_id.usecase";
import { GetMoreExpensiveBooksThanPriceUseCaseContract } from "src/books/domain/contracts/usecases/get_more_expensive_books_than_price_usecase.contract";
import { GetMoreExpensiveBooksThanPriceUseCase } from "./get_more_expensive_books_than_price.usecase";
import { CreateBookUseCaseContract } from "src/books/domain/contracts/usecases/create_book_usecase.contract";
import { CreateBookUseCase } from "./create_book.usecase";
import { GetBooksAverageCostUseCase } from "./get_books_average_cost.usecase";
import { GetBooksAverageCostUseCaseContract } from "src/books/domain/contracts/usecases/get_books_average_cost_usecase.contract";
import { GetBooksByPhraseUseCase } from "./get_books_by_phrase.usecase";
import { GetBooksByPhraseUseCaseContract } from "src/books/domain/contracts/usecases/get_books_by_phrase_usecase.contract";

export const bookUseCasesProviders: Provider[] = [
    {
        provide: GetBooksUseCaseContract,
        useClass: GetBooksUseCase
    },
    {
        provide: GetBookByIdUseCaseContract,
        useClass: GetBookByIdUseCase
    },
    {
        provide: GetMoreExpensiveBooksThanPriceUseCaseContract,
        useClass: GetMoreExpensiveBooksThanPriceUseCase
    },
    {
        provide: CreateBookUseCaseContract,
        useClass: CreateBookUseCase
    },
    {
        provide: GetBooksAverageCostUseCaseContract,
        useClass: GetBooksAverageCostUseCase
    },
    {
        provide: GetBooksByPhraseUseCaseContract,
        useClass: GetBooksByPhraseUseCase
    }
]