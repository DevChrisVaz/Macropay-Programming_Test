import { UseCase } from "src/common/domain/contracts/usecase.contract";
import { Auth } from "../../entities/auth.entity";

export abstract class LoginUseCaseContract extends UseCase<Auth, Promise<{ token: string }>> { }