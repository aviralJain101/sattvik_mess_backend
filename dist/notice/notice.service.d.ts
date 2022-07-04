import { Model } from 'mongoose';
import { Notice } from './notice.model';
export declare class NoticeService {
    private readonly noticeModel;
    constructor(noticeModel: Model<Notice>);
    createNotice(messNumber: number, message: string): Promise<Notice & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllNotices(): Promise<(Notice & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getNotice(noticeId: string): Promise<Notice>;
    updateNotice(noticeId: string, messNumber: number, message: string): Promise<void>;
    deleteNotice(noticeId: string): Promise<void>;
    private findNotice;
}
