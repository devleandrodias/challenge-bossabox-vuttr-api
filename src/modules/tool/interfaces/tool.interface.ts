import { Document } from 'mongoose';

export interface ITool extends Document {
  readonly title: string;
  readonly link: string;
  readonly description: string;
  readonly tags: string[];
}
