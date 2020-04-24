import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ToolRepository } from '../repositories/tool.repository';
import { Tool } from '../model/tool.model';
import { UpdateToolDto } from '../dtos/update-tool.dto';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { GenericResult } from 'src/shared/models/generic-result.model';
import { GenericMessage } from 'src/shared/enums/generic-messages.enum';

@Injectable()
export class ToolService {
  constructor(private readonly _repository: ToolRepository) {}

  async findAll() {
    try {
      const data = await this._repository.findAll();
      return new GenericResult(
        GenericMessage.SuccessExecutableAction,
        true,
        data,
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

  async findAllByTag(tag: string) {
    try {
      const data = await this._repository.findAllByTag(tag);
      return new GenericResult(
        GenericMessage.SuccessExecutableAction,
        true,
        data,
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

  async create(data: CreateToolDto) {
    try {
      const { title, link, description, tags } = data;

      const tool = await this._repository.create(
        new Tool(title, link, description, tags),
      );

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

  async update(id: string, data: UpdateToolDto) {
    try {
      await this._repository.update(id, data);

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

  async remove(id: string) {
    try {
      await this._repository.remove(id);
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
