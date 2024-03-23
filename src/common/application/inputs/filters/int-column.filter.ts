import { Field, InputType, Int } from '@nestjs/graphql';
import { FilterInput } from './filter';
import { NumericFilterOption } from '../../enums/filter-options/numeric.filter-option';

@InputType()
export class IntColumnFilterInput implements FilterInput<NumericFilterOption, number> {
  @Field(() => NumericFilterOption)
  option: NumericFilterOption;

  @Field(() => Int)
  value: number;
}
