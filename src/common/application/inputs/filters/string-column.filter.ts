import { Field, InputType } from '@nestjs/graphql';
import { BaseFilterInput } from './base.filter';
import { StringFilterOption } from '../../enums/filter-options/string.filter-option';

@InputType()
export class StringColumnFilterInput implements BaseFilterInput<StringFilterOption, string> {
  @Field(() => StringFilterOption)
  operation: StringFilterOption;

  @Field()
  value: string;
}
