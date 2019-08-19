import { ConfigModule } from './../config/config.module';
import { ConfigService } from './../config/service/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => ({
    ...config.getOrmConfig(),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  }),
})];
