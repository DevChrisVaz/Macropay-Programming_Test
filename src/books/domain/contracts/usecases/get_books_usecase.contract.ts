import { UseCase } from "src/common/domain/contracts/usecase.contract";
import { Book } from "../../entities/book.entity";

export abstract class GetBooksUseCaseContract extends UseCase<void, Promise<Array<Book>>> { }