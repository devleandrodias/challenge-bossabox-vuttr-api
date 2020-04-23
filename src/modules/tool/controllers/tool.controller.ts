import {
  Controller,
  Get,
  Body,
  HttpException,
  HttpStatus,
  Post,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { ToolService } from '../services/tool.service';
import { GenericResult } from 'src/shared/models/generic-result.model';
import { GenericMessage } from 'src/shared/enums/generic-messages.enum';
import { Tool } from '../model/tool.model';
import { UpdateToolDto } from '../dtos/update-tool.dto';

@Controller('tools')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Get()
  async get() {
    return await this.toolService.findAll();
  }

  @Get()
  async getByTag() {
    // TODO: implementar /tools?tag=node
  }

  @Post()
  async create(@Body() data: CreateToolDto) {
    try {
      const reste = new Tool(
        data.title,
        data.link,
        data.description,
        data.tags,
      );

      const tool = await this.toolService.create(reste);

      return new GenericResult(
        GenericMessage.SuccessExecutableAction,
        true,
        tool,
        null,
      );
    } catch (error) {
      return new HttpException(
        new GenericResult(
          GenericMessage.NotExecutableAction,
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateToolDto) {
    try {
      await this.toolService.update(id, data);

      return new GenericResult(
        GenericMessage.SuccessExecutableAction,
        true,
        data,
        null,
      );
    } catch (error) {
      new HttpException(
        new GenericResult(
          GenericMessage.NotExecutableAction,
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.toolService.remove(id);
      return new GenericResult(
        GenericMessage.SuccessExecutableAction,
        true,
        null,
        null,
      );
    } catch (error) {
      return new HttpException(
        new GenericResult(
          GenericMessage.NotExecutableAction,
          false,
          null,
          error,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
