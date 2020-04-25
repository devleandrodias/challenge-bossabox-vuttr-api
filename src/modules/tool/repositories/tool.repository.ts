import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tool } from '../model/tool.model';
import { ITool } from '../interfaces/models/tool.interface';
import { IToolRepository } from '../interfaces/repositories/tool.interface';

@Injectable()
export class ToolRepository implements IToolRepository {
  constructor(@InjectModel('Tool') private readonly toolModel: Model<ITool>) {}

  async findAll(): Promise<Tool[]> {
    return await this.toolModel.find().exec();
  }

  async findAllByTag(tag: string): Promise<Tool[]> {
    return await this.toolModel.find({ tags: tag }).exec();
  }

  async create(data: Tool): Promise<Tool> {
    return await new this.toolModel(data).save();
  }

  async update(id: string, data: Tool): Promise<Tool> {
    return await this.toolModel.findByIdAndUpdate(id, data);
  }

  async remove(id: string) {
    await this.toolModel.findByIdAndDelete(id);
  }
}
