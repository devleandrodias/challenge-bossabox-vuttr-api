import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ToolService } from '../services/tool.service';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { UpdateToolDto } from '../dtos/update-tool.dto';

@ApiTags('tools')
@Controller('tools')
export class ToolController {
  constructor(private readonly _service: ToolService) {}

  @Get()
  public async get() {
    return await this._service.findAll();
  }

  @Get('tag')
  public async getByTag(@Query('tag') tag: string) {
    return await this._service.findAllByTag(tag);
  }

  @Post()
  public async create(@Body() data: CreateToolDto) {
    return await this._service.create(data);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() data: UpdateToolDto) {
    return await this._service.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await this._service.remove(id);
  }
}
