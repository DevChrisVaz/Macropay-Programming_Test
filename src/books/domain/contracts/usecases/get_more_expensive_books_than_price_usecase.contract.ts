import { UseCase } from "src/common/domain/contracts/usecase.contract";
import { Book } from "../../entities/book.entity";

export abstract class GetMoreExpensiveBooksThanPriceUseCaseContract extends UseCase<number, Promise<Array<Book>>> { }