import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Tool } from '../model/tool.model';
import { ITool } from '../interfaces/tool.interface';

@Injectable()
export class ToolService {
  constructor(@InjectModel('Tool') private readonly toolModel: Model<ITool>) {}

  async create(data: Tool): Promise<Tool> {
    return await new this.toolModel(data).save();
  }

  async findAll() {
    return await this.toolModel.find().exec();
  }
}
