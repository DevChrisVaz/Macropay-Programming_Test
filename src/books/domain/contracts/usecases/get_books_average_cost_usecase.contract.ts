import { UseCase } from "src/common/domain/contracts/usecase.contract";
import { Book } from "../../entities/book.entity";

export abstract class GetBooksAverageCostUseCaseContract extends UseCase<void, Promise<number>> { }