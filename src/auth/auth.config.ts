import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export default () => ({
    secret: process.env.JWT_SECRET
});

export const configProviders: Provider[] = [
    {
      provide: 'SECRET',
      useFactory: (configService: ConfigService) =>
        configService.get<string>('secret'),
      inject: [ConfigService],
    },
  ];