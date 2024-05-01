import { Provider } from "@nestjs/common";
import { LoginUseCaseContract } from "src/auth/domain/contracts/usecases/login_usecase.contract";
import { LoginUseCase } from "./login.usecase";

export const authUseCaseProviders: Provider[] = [
    {
        provide: LoginUseCaseContract,
        useClass: LoginUseCase
    }
]