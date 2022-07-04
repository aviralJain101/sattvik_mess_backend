"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeSchema = void 0;
const mongoose = require("mongoose");
exports.NoticeSchema = new mongoose.Schema({
    messNumber: { type: Number, required: true },
    message: { type: String, required: true },
});
//# sourceMappingURL=notice.model.js.map