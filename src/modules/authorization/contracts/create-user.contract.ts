import { Injectable } from '@nestjs/common';
import { IContract } from 'src/shared/contracts/generic.contract';
import { Flunt } from 'src/shared/utils/flunt';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserContract implements IContract {
  errors: string[];

  validate(model: CreateUserDto): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(
      model.username,
      5,
      'title had to have more than 5 characters',
    );
    flunt.hasMinLen(
      model.password,
      5,
      'link had to have more than 5 characters',
    );

    this.errors = flunt.errors;

    return flunt.isValid();
  }
}
