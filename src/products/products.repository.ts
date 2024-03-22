import { Injectable } from '@nestjs/common';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { DatabaseService } from 'src/common/database/database.service';
import { Product } from './entities/product.entity';
import { FIND_ALL_QUERY } from './queries/find-all.query';
import { QueryResult } from 'pg';

@Injectable()
export class ProductsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  public async findAll(paginationArgs: PaginationArgs): Promise<Product[]> {
    let query = FIND_ALL_QUERY;
    query = this.databaseService.includePagination(paginationArgs, query);

    const result: QueryResult = await this.databaseService.query(query);

    return [];
  }
}
