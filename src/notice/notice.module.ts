import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeController } from './notice.controller';
import { NoticeSchema } from './notice.model';
import { NoticeService } from './notice.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Notice', schema: NoticeSchema }]),
  ],
  controllers: [NoticeController],
  providers: [NoticeService],
})
export class NoticeModule {}
