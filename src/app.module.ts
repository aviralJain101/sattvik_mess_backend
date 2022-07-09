import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { NoticeModule } from './notice/notice.module';
import { userModule } from './user/user.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    userModule,
    NoticeModule,
    MongooseModule.forRoot(
      process.env.MONGO_URI,
    ),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
