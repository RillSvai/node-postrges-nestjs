import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, PoolConfig } from 'pg';
import { QueryLog } from './interfaces/query-log.interface';
import { PaginationArgs } from '../args/pagination.args';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor(private readonly configService: ConfigService) {}

  public async onModuleInit(): Promise<void> {
    const poolConfig: PoolConfig = {
      host: this.configService.get('POSTGRES_HOST'),
      port: this.configService.get('POSTGRES_PORT'),
      database: this.configService.get('POSTGRES_DB'),
      user: this.configService.get('POSTGRES_USER'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      max: this.configService.get('POSTGRES_MAX_CLIENT_CONNECTIONS'),
    };

    this.pool = new Pool(poolConfig);
  }

  public async onModuleDestroy(): Promise<void> {
    await this.pool.end();
  }

  public async query(text: string, params: any[] = []) {
    const start = Date.now();
    const result = await this.pool.query(text, params);
    const duration = Date.now() - start;

    const queryLog: QueryLog = {
      text,
      duration: `${duration} ms`,
      rowCount: result.rowCount,
    };
    console.log(`Executed query:\n${JSON.stringify(queryLog, null, 2)}`);

    return result;
  }

  public includePagination(paginationArgs: PaginationArgs, query: string): string {
    if (paginationArgs.offset !== 0) {
      query += ` OFFSET ${paginationArgs.offset}`;
    }
    if (paginationArgs.limit) {
      query += ` LIMIT ${paginationArgs.limit}`;
    }
    return query;
  }
}
