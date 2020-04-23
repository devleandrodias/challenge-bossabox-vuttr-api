import {
  Controller,
  Get,
  Body,
  HttpException,
  HttpStatus,
  Post,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { ToolService } from '../services/tool.service';
import { GenericResult } from 'src/shared/models/generic-result.model';
import { GenericMessage } from 'src/shared/enums/generic-messages.enum';
import { Tool } from '../model/tool.model';

@Controller('tools')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Get()
  async get() {
    return await this.toolService.findAll();
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
