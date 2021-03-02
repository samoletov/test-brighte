import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NotificationModule } from './notify/module';
import { PersonModule } from './person/module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersonModule, NotificationModule],
})
export class AppModule {}
