import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from 'src/common/database/enums/sort-order.enum';

@InputType()
export class ProductSortingInput {
  @Field(() => SortOrder, { nullable: true })
  name?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  weight?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  stockQuantity?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: SortOrder;
}
