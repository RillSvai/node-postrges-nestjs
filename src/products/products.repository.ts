import { ColumnFilter } from '../common/database/select-options/column-filter.select-option';
import { ProductRowMapper } from './mappers/product-row.mapper';
import { Injectable } from '@nestjs/common';
import { PaginationArgs } from 'src/common/application/args/pagination.args';
import { DatabaseService } from 'src/common/database/database.service';
import { Product, ProductColumns } from './entities/product.entity';
import { FIND_ALL_QUERY } from './queries/find-all.query';
import { QueryResult } from 'pg';
import { ProductFilterInput } from './inputs/product-filter.input';
import { ProductSortingInput } from './inputs/product-sorting.input';
import { ColumnSorting } from 'src/common/database/select-options/column-sorting.select-option';

@Injectable()
export class ProductsRepository {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly rowMapper: ProductRowMapper,
  ) {}

  public async findAll(
    paginationArgs: PaginationArgs,
    filterInput: ProductFilterInput,
    sortingInput: ProductSortingInput,
  ): Promise<Product[]> {
    let query = FIND_ALL_QUERY;
    const params = [];

    if (filterInput) {
      const filters: ColumnFilter[] = this.createProductFilters(filterInput);
      query = this.databaseService.includeFilters(filters, filterInput.filterOperator, query, params);
    }
    if (sortingInput) {
      const sortings: ColumnSorting[] = this.createProductSortings(sortingInput);
      query = this.databaseService.includeSorting(sortings, query);
    }
    query = this.databaseService.includePagination(paginationArgs.offset, paginationArgs.limit, query, params);

    const result: QueryResult = await this.databaseService.query(query, params);

    return this.rowMapper.rowArrayToEntities(result.rows);
  }

  private createProductFilters(filterInput: ProductFilterInput): ColumnFilter[] {
    const filters: ColumnFilter[] = [];

    if (filterInput.name) filters.push(new ColumnFilter(filterInput.name, ProductColumns.Name));
    if (filterInput.price) filters.push(new ColumnFilter(filterInput.price, ProductColumns.Price));
    if (filterInput.stockQuantity)
      filters.push(new ColumnFilter(filterInput.stockQuantity, ProductColumns.StockQuantity));
    if (filterInput.weight) filters.push(new ColumnFilter(filterInput.weight, ProductColumns.Weight));

    return filters;
  }

  private createProductSortings(sortingInput: ProductSortingInput): ColumnSorting[] {
    const sortings: ColumnSorting[] = [];

    if (sortingInput.price) sortings.push(new ColumnSorting(ProductColumns.Price, sortingInput.price));
    if (sortingInput.name) sortings.push(new ColumnSorting(ProductColumns.Name, sortingInput.name));
    if (sortingInput.stockQuantity)
      sortings.push(new ColumnSorting(ProductColumns.StockQuantity, sortingInput.stockQuantity));
    if (sortingInput.weight) sortings.push(new ColumnSorting(ProductColumns.Weight, sortingInput.weight));

    return sortings;
  }
}
