import { Module } from '@nestjs/common';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
})
export class AppModule {}
