import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  public async findAll(paginationArgs: PaginationArgs): Promise<Product[]> {
    return await this.productsRepository.findAll(paginationArgs);
  }
}
