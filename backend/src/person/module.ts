import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from 'src/notify/module';

import { PersonController } from './controller';
import { Person } from './entity';
import { PersonService } from './service';

@Module({
  imports: [TypeOrmModule.forFeature([Person]), NotificationModule],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
