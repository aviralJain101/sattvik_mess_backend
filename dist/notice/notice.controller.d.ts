import { Notice } from './notice.model';
import { NoticeService } from './notice.service';
export declare class NoticeController {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    createNotice(messNumber: number, message: string): Promise<Notice>;
    getAllNotices(): Promise<(Notice & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getNotice(noticeId: string): Promise<Notice>;
    updateNotice(noticeId: string, messNumber: number, message: string): Promise<any>;
    deleteNotice(noticeId: string): Promise<any>;
}
