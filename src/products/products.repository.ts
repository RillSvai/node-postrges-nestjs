import { ColumnFilter } from '../common/database/column-filter';
import { ProductRowMapper } from './mappers/product-row.mapper';
import { Injectable } from '@nestjs/common';
import { PaginationArgs } from 'src/common/application/args/pagination.args';
import { DatabaseService } from 'src/common/database/database.service';
import { Product } from './entities/product.entity';
import { FIND_ALL_QUERY } from './queries/find-all.query';
import { QueryResult } from 'pg';
import { ProductFilterInput } from './inputs/product-filter.input';

@Injectable()
export class ProductsRepository {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly rowMapper: ProductRowMapper,
  ) {}

  public async findAll(paginationArgs: PaginationArgs, filterInput: ProductFilterInput): Promise<Product[]> {
    let query = FIND_ALL_QUERY;
    const params = [];

    if (filterInput) {
      const filters: ColumnFilter[] = this.createProductFilters(filterInput);
      query = this.databaseService.includeFilters(filters, filterInput.filterOperator, query, params);
    }

    query = this.databaseService.includePagination(paginationArgs.offset, paginationArgs.limit, query, params);

    const result: QueryResult = await this.databaseService.query(query, params);

    return this.rowMapper.rowArrayToEntities(result.rows);
  }

  private createProductFilters(filterInput: ProductFilterInput) {
    const filters: ColumnFilter[] = [];

    if (filterInput.name) filters.push(new ColumnFilter(filterInput.name, 'name'));
    if (filterInput.price) filters.push(new ColumnFilter(filterInput.price, 'price'));
    if (filterInput.stockQuantity) filters.push(new ColumnFilter(filterInput.stockQuantity, 'stock_quantity'));
    if (filterInput.weight) filters.push(new ColumnFilter(filterInput.weight, 'weight'));

    return filters;
  }
}
