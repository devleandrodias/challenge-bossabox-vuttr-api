import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Tool } from '../model/tool.model';
import { ITool } from '../interfaces/tool.interface';

@Injectable()
export class ToolService {
  constructor(@InjectModel('Tool') private readonly toolModel: Model<ITool>) {}

  async findAll() {
    return await this.toolModel.find().exec();
  }

  async findAllByTag(tag: string) {
    return await this.toolModel
      .find({
        tags: tag,
      })
      .exec();
  }

  async create(data: Tool): Promise<Tool> {
    return await new this.toolModel(data).save();
  }

  async update(id: string, data: Tool): Promise<Tool> {
    return await this.toolModel.findByIdAndUpdate(id, data);
  }

  async remove(id: string) {
    return await this.toolModel.findByIdAndDelete(id);
  }
}
