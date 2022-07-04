import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notice } from './notice.model';

@Injectable()
export class NoticeService {
  constructor(
    @InjectModel('Notice') private readonly noticeModel: Model<Notice>,
  ) {}

  async createNotice(messNumber: number, message: string) {
    const newNotice = new this.noticeModel({
      messNumber,
      message,
    });

    const result = await newNotice.save();
    return result;
    // return JSON.stringify(result);
  }

  async getAllNotices(){
    const notices = await this.noticeModel.find().exec();
    return notices;
  }

  async getNotice(noticeId: string){
    const notice = await this.findNotice(noticeId);
    return notice;
  }

  async updateNotice(noticeId: string,messNumber: number,message: string){
    const updatedNotice = await this.findNotice(noticeId);
    if(messNumber){
      updatedNotice.messNumber = messNumber;
    }
    if(message){
      updatedNotice.message = message;
    }
    updatedNotice.save();
  }

  async deleteNotice(noticeId: string){
    try {
      await this.noticeModel.findOneAndDelete({_id: noticeId});
    } catch (error) {
      throw new NotFoundException('Could not find the notice.');
    }
  }

  private async findNotice(id: string) : Promise<Notice>{
    let notice;
    try {
      notice = await this.noticeModel.findOne({_id:id});
    } catch (error) {
      throw new NotFoundException('Could not find the notice');
    }
    if(!notice){
      throw new NotFoundException('Could not find the notice');
    }
    return notice;
  }
}
