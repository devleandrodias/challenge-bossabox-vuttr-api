import { Injectable } from '@nestjs/common';
import { IContract } from 'src/shared/contracts/generic.contract';
import { CreateToolDto } from '../dtos/create-tool.dto';
import { Flunt } from 'src/shared/utils/flunt';

@Injectable()
export class CreateToolContract implements IContract {
  errors: string[];

  validate(model: CreateToolDto): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.title, 3, 'title had to have more than 3 characters');
    flunt.hasMinLen(model.link, 5, 'link had to have more than 5 characters');
    flunt.hasMinLen(
      model.description,
      5,
      'description had to have more than 5 characters',
    );

    this.errors = flunt.errors;

    return flunt.isValid();
  }
}
