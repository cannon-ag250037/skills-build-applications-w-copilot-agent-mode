import { model, Schema } from 'mongoose';

export interface User {
  username: string;
  email: string;
  displayName: string;
}

const userSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    displayName: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const UserModel = model<User>('User', userSchema);