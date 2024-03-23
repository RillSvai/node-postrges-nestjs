import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  price: number;

  @Field()
  stockQuantity: number;

  @Field()
  weight: number;

  createdAt: Date;

  updatedAt: Date;
}

export enum ProductColumns {
  Id = 'id',
  Name = 'name',
  Description = 'description',
  Price = 'price',
  StockQuantity = 'stock_quantity',
  Weight = 'weight',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}
