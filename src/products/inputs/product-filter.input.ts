import { Field, InputType } from '@nestjs/graphql';
import { FloatColumnFilterInput } from 'src/common/application/inputs/filters/float-column.filter';
import { IntColumnFilterInput } from 'src/common/application/inputs/filters/int-column.filter';
import { StringColumnFilterInput } from 'src/common/application/inputs/filters/string-column.filter';
import { FilterOperator } from 'src/common/database/enums/filter.operator';

@InputType()
export class ProductFilterInput {
  @Field(() => FilterOperator)
  filterOperator: FilterOperator;

  @Field(() => [StringColumnFilterInput], { nullable: true })
  name: StringColumnFilterInput[];

  @Field(() => [FloatColumnFilterInput], { nullable: true })
  price: FloatColumnFilterInput[];

  @Field(() => [IntColumnFilterInput], { nullable: true })
  stockQuantity: IntColumnFilterInput[];

  @Field(() => [FloatColumnFilterInput], { nullable: true })
  weight: FloatColumnFilterInput[];
}
