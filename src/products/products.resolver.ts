import { ProductsService } from './products.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { PaginationArgs } from 'src/common/application/args/pagination.args';
import { ProductFilterInput } from './inputs/product-filter.input';
import { ProductSortingInput } from './inputs/product-sorting.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product!]!)
  public async findAll(
    @Args() paginationArgs: PaginationArgs,
    @Args('filterInput', { type: () => ProductFilterInput, nullable: true }) filterInput: ProductFilterInput,
    @Args('sortingInput', { type: () => ProductSortingInput, nullable: true }) sortingInput: ProductSortingInput,
  ): Promise<Product[]> {
    return await this.productsService.findAll(paginationArgs, filterInput, sortingInput);
  }
}
