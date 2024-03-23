import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductsResolver } from './products.resolver';
import { DatabaseModule } from 'src/common/database/database.module';
import { ProductsRowMapper } from './mappers/products.row-mapper';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService, ProductsRepository, ProductsResolver, ProductsRowMapper],
})
export class ProductsModule {}
