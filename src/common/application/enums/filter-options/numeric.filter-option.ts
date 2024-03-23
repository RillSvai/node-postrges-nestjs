import { registerEnumType } from '@nestjs/graphql';

export enum NumericFilterOption {
  GreaterThan = 'gt',
  LessThan = 'lt',
  EqualTo = 'et',
  NotEqualTo = 'net',
}

registerEnumType(NumericFilterOption, {
  name: 'NumericFilterOption',
});
