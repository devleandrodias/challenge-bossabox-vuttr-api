import { Schema } from 'mongoose';

export const ToolSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: {
      unique: true,
    },
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});
