import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Notice } from './notice.model';
import { NoticeService } from './notice.service';

@Controller('notices')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Post()
  async createNotice(
    @Body('messNumber') messNumber: number,
    @Body('message') message: string,
  ){
    const notice = await this.noticeService.createNotice(messNumber, message);
    return notice as Notice;
  }

  @Get()
  async getAllNotices(){
    const notices = await this.noticeService.getAllNotices();
    return notices;
  }

  @Get(':noticeId')
  getNotice(
    @Param('noticeId') noticeId: string 
  ){
    return this.noticeService.getNotice(noticeId);
  }

  @Patch(':noticeId')
  async updateNotice(
    @Param('noticeId') noticeId: string,
    @Body('messNumber') messNumber: number,
    @Body('message') message: string,
  ){
    await this.noticeService.updateNotice(noticeId,messNumber,message);
    return null;
  }

  @Delete(':noticeId')
  async deleteNotice(@Param('noticeId') noticeId: string){
    await this.noticeService.deleteNotice(noticeId);
    return null;
  }
}
