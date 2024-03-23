import { registerEnumType } from '@nestjs/graphql';

export enum StringFilterOption {
  EqualTo = 'et',
  NotEqualTo = 'net',
  Like = 'l',
  NotLike = 'nl',
}

registerEnumType(StringFilterOption, {
  name: 'StringFilterOption',
});
