import { Field, InputType, Int } from '@nestjs/graphql';
import { BaseFilterInput } from './base.filter';
import { NumericFilterOption } from '../../enums/filter-options/numeric.filter-option';

@InputType()
export class IntColumnFilterInput implements BaseFilterInput<NumericFilterOption, number> {
  @Field(() => NumericFilterOption)
  operation: NumericFilterOption;

  @Field(() => Int)
  value: number;
}
