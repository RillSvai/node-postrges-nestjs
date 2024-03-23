import { Field, Float, InputType } from '@nestjs/graphql';
import { FilterInput } from './filter';
import { NumericFilterOption } from '../../enums/filter-options/numeric.filter-option';

@InputType()
export class FloatColumnFilterInput implements FilterInput<NumericFilterOption, number> {
  @Field(() => NumericFilterOption)
  option: NumericFilterOption;

  @Field(() => Float)
  value: number;
}
