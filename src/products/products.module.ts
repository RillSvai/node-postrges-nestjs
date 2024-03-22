import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductsResolver } from './products.resolver';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService, ProductsRepository, ProductsResolver],
})
export class ProductsModule {}
