import { Field, InputType } from '@nestjs/graphql';
import { FilterInput } from './filter';
import { StringFilterOption } from '../../enums/filter-options/string.filter-option';

@InputType()
export class StringColumnFilterInput implements FilterInput<StringFilterOption, string> {
  @Field(() => StringFilterOption)
  option: StringFilterOption;

  @Field()
  value: string;
}
