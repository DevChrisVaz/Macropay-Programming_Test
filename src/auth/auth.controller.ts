import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './application/dto/login.dto';
import { LoginUseCaseContract } from './domain/contracts/usecases/login_usecase.contract';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCaseContract) { }

  @Public()
  @Post()
  create(@Body() loginDto: LoginDto) {
    return this.loginUseCase.run(loginDto);
  }
}
