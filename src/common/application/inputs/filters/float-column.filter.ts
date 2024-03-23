import { Field, Float, InputType } from '@nestjs/graphql';
import { BaseFilterInput } from './base.filter';
import { NumericFilterOption } from '../../enums/filter-options/numeric.filter-option';

@InputType()
export class FloatColumnFilterInput implements BaseFilterInput<NumericFilterOption, number> {
  @Field(() => NumericFilterOption)
  operation: NumericFilterOption;

  @Field(() => Float)
  value: number;
}
