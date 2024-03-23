import { Injectable } from '@nestjs/common';
import { Product, ProductColumns } from '../entities/product.entity';
import { RowMapper } from 'src/common/application/row-mapper';

@Injectable()
export class ProductRowMapper implements RowMapper<Product> {
  public rowArrayToEntities(rowArray: any[]): Product[] {
    return rowArray.map((row) => this.rowToEntity(row));
  }

  public rowToEntity(rowData: any): Product {
    const product = new Product();

    product.id = rowData[ProductColumns.Id];
    product.name = rowData[ProductColumns.Name];
    product.description = rowData[ProductColumns.Description];
    product.price = rowData[ProductColumns.Price];
    product.stockQuantity = rowData[ProductColumns.StockQuantity];
    product.weight = rowData[ProductColumns.Weight];

    return product;
  }
}
