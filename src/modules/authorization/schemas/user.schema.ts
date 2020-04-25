import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    index: {
      unique: true,
    },
  },
  password_hash: {
    type: String,
    required: true,
    min: 6,
    trim: true,
  },
});
