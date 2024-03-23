import { registerEnumType } from '@nestjs/graphql';

export enum ProductFilterColumn {
  Name = 'name',
  Price = 'price',
  StockQuantity = 'stock_quantity',
  Weight = 'weight',
}

registerEnumType(ProductFilterColumn, {
  name: 'ProductFilterColumn',
});
