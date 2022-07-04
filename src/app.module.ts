import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [NoticeModule ,MongooseModule.forRoot("mongodb+srv://aayush:1234@nodeexpressprojects.gzma6.mongodb.net/nestjs-intro?retryWrites=true&w=majority")],
  // imports: [NoticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
