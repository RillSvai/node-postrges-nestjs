import { ProductsService } from './products.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { PaginationArgs } from 'src/common/application/args/pagination.args';
import { ProductFilterInput } from './inputs/product-filter.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product!]!)
  public async findAll(
    @Args() paginationArgs: PaginationArgs,
    @Args('filterInput', { type: () => ProductFilterInput!, nullable: true }) filterInput: ProductFilterInput,
  ): Promise<Product[]> {
    return await this.productsService.findAll(paginationArgs, filterInput);
  }
}
