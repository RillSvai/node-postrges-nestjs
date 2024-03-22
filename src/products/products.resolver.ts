import { ProductsService } from './products.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product!]!)
  public async findAll(@Args() paginationArgs: PaginationArgs): Promise<Product[]> {
    return await this.productsService.findAll(paginationArgs);
  }
}
