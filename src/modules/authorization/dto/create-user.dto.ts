import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @ApiProperty()
  public username: string;

  @ApiProperty()
  public password: string;
}
