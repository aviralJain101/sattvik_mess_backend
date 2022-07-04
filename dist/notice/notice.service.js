"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let NoticeService = class NoticeService {
    constructor(noticeModel) {
        this.noticeModel = noticeModel;
    }
    async createNotice(messNumber, message) {
        const newNotice = new this.noticeModel({
            messNumber,
            message,
        });
        const result = await newNotice.save();
        return result;
    }
    async getAllNotices() {
        const notices = await this.noticeModel.find().exec();
        return notices;
    }
    async getNotice(noticeId) {
        const notice = await this.findNotice(noticeId);
        return notice;
    }
    async updateNotice(noticeId, messNumber, message) {
        const updatedNotice = await this.findNotice(noticeId);
        if (messNumber) {
            updatedNotice.messNumber = messNumber;
        }
        if (message) {
            updatedNotice.message = message;
        }
        updatedNotice.save();
    }
    async deleteNotice(noticeId) {
        try {
            await this.noticeModel.findOneAndDelete({ _id: noticeId });
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find the notice.');
        }
    }
    async findNotice(id) {
        let notice;
        try {
            notice = await this.noticeModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find the notice');
        }
        if (!notice) {
            throw new common_1.NotFoundException('Could not find the notice');
        }
        return notice;
    }
};
NoticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Notice')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NoticeService);
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map