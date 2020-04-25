import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from '../interfaces/models/user.interface';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(data: User): Promise<User> {
    return await new this.userModel(data).save();
  }
}
