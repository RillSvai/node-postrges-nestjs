import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { BaseRowMapper } from 'src/common/application/base.row-mapper';

@Injectable()
export class ProductsRowMapper implements BaseRowMapper<Product> {
  public rowArrayToEntities(rowArray: any[]): Product[] {
    return rowArray.map((row) => this.rowToEntity(row));
  }

  public rowToEntity(rowData: any): Product {
    const product = new Product();

    product.id = rowData.id;
    product.name = rowData.name;
    product.description = rowData.description;
    product.price = rowData.price;
    product.stockQuantity = rowData.stock_quantity;
    product.weight = rowData.weight;

    return product;
  }
}
