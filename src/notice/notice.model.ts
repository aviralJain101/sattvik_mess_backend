import * as mongoose from 'mongoose';

export const NoticeSchema = new mongoose.Schema({
  messNumber: { type: Number, required: true },
  message: { type: String, required: true },
});

export interface Notice extends mongoose.Document{
    id: string;
    messNumber: Number;
    message: String;
}