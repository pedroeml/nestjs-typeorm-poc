import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import keys from '../constants/keys';

@Injectable()
export class ConfigService {
  private readonly ORM_CONFIG: TypeOrmModuleOptions;

  constructor() {
    this.ORM_CONFIG = {
      type: 'postgres',
      host: keys.POSTGRESQL_HOST,
      port: Number(keys.POSTGRESQL_PORT),
      username: keys.POSTGRESQL_USER,
      password: keys.POSTGRESQL_PASSWORD,
      database: keys.POSTGRESQL_DATABASE,
      synchronize: true,
    };
  }

  public getOrmConfig(): TypeOrmModuleOptions {
    return this.ORM_CONFIG;
  }
}
