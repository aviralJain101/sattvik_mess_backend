import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  messNumber: { type: Number, required: true },
});

export interface User extends mongoose.Document {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  messNumber: Number;
}
