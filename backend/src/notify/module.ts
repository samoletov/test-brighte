import { Module } from '@nestjs/common';

import { NotificationService } from './service';

@Module({
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
