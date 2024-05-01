import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginUseCaseContract } from "src/auth/domain/contracts/usecases/login_usecase.contract";
import { Auth } from "src/auth/domain/entities/auth.entity";

@Injectable()
export class LoginUseCase implements LoginUseCaseContract {
    constructor(
        private jwtService: JwtService
    ) { }

    async run(auth: Auth): Promise<{ token: string }> {
        if (auth.user !== "user4" || auth.password !== "pass4#") {
            throw new UnauthorizedException();
        }
        const payload = { user: auth.user };
        return {
            token: await this.jwtService.signAsync(payload, { expiresIn: 60 * 60 * 1000 }),
        };
    }
}