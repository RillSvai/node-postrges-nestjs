import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PaginationArgs } from 'src/common/application/args/pagination.args';
import { Product } from './entities/product.entity';
import { ProductFilterInput } from './inputs/product-filter.input';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  public async findAll(paginationArgs: PaginationArgs, filterInput: ProductFilterInput): Promise<Product[]> {
    return await this.productsRepository.findAll(paginationArgs, filterInput);
  }
}
