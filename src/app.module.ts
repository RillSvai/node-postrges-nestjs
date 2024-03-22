import { Module } from '@nestjs/common';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { DatabaseModule } from './common/database/database.module';
import { GqlModule } from './common/gql/gql.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, GqlModule, ProductsModule],
})
export class AppModule {}
