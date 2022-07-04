import * as mongoose from 'mongoose';
export declare const NoticeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    messNumber: number;
    message: string;
}>;
export interface Notice extends mongoose.Document {
    id: string;
    messNumber: Number;
    message: String;
}
