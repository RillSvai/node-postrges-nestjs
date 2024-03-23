import { NumericFilterOption } from 'src/common/application/enums/filter-options/numeric.filter-option';
import { StringFilterOption } from 'src/common/application/enums/filter-options/string.filter-option';
import { BaseFilterInput } from 'src/common/application/inputs/filters/base.filter';

export class FilterOption {
  filters: BaseFilterInput<StringFilterOption | NumericFilterOption, number | string>[];
  column: string;

  constructor(filters: BaseFilterInput<StringFilterOption | NumericFilterOption, number | string>[], column: string) {
    this.filters = filters;
    this.column = column;
  }
}
