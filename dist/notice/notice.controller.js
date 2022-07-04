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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const notice_service_1 = require("./notice.service");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    async createNotice(messNumber, message) {
        const notice = await this.noticeService.createNotice(messNumber, message);
        return notice;
    }
    async getAllNotices() {
        const notices = await this.noticeService.getAllNotices();
        return notices;
    }
    getNotice(noticeId) {
        return this.noticeService.getNotice(noticeId);
    }
    async updateNotice(noticeId, messNumber, message) {
        await this.noticeService.updateNotice(noticeId, messNumber, message);
        return null;
    }
    async deleteNotice(noticeId) {
        await this.noticeService.deleteNotice(noticeId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('messNumber')),
    __param(1, (0, common_1.Body)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "createNotice", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "getAllNotices", null);
__decorate([
    (0, common_1.Get)(':noticeId'),
    __param(0, (0, common_1.Param)('noticeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getNotice", null);
__decorate([
    (0, common_1.Patch)(':noticeId'),
    __param(0, (0, common_1.Param)('noticeId')),
    __param(1, (0, common_1.Body)('messNumber')),
    __param(2, (0, common_1.Body)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "updateNotice", null);
__decorate([
    (0, common_1.Delete)(':noticeId'),
    __param(0, (0, common_1.Param)('noticeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "deleteNotice", null);
NoticeController = __decorate([
    (0, common_1.Controller)('notices'),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
exports.NoticeController = NoticeController;
//# sourceMappingURL=notice.controller.js.map