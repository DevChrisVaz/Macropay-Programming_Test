import { Book } from "src/books/domain/entities/book.entity";

export class CreateBookDto implements Book {
    id: string;
    title: string;
    author: string;
    price: number;
    availability: number;
    num_reviews: number;
    stars: number;
    description: string;
}
