import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { authUseCaseProviders } from './application/usecases/providers';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import authConfig, { configProviders } from './auth.config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forFeature(authConfig),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>("secret")
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    ...configProviders,
    ...authUseCaseProviders,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
