import { UseCase } from "src/common/domain/contracts/usecase.contract";
import { Book } from "../../entities/book.entity";

export abstract class GetBooksByPhraseUseCaseContract extends UseCase<string, Promise<Array<Book>>> { }