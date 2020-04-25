import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '../models/user.model';
import { GenericResult } from 'src/shared/models/generic-result.model';
import { GenericMessage } from 'src/shared/enums/generic-messages.enum';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserContract } from '../contracts/create-user.contract';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AccountService {
  constructor(
    private readonly _validation: CreateUserContract,
    private readonly _repository: UserRepository,
  ) {}

  async create(data: CreateUserDto) {
    try {
      if (this._validation.validate(data)) {
        const { username, password } = data;

        // TODO: Encripar senha antes de salva-la

        await this._repository.create(new User(username, password));

        return new GenericResult(
          GenericMessage.SuccessExecutableAction,
          true,
          username,
          null,
        );
      } else {
        return new GenericResult(
          GenericMessage.NotExecutableAction,
          false,
          null,
          this._validation.errors,
        );
      }
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
