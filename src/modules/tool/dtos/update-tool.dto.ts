import { ApiProperty } from '@nestjs/swagger';

export class UpdateToolDto {
  constructor(
    title: string,
    link: string,
    description: string,
    tags: string[],
  ) {
    this.title = title;
    this.link = link;
    this.description = description;
    this.tags = tags;
  }

  @ApiProperty()
  public title: string;

  @ApiProperty()
  public link: string;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public tags: string[];
}
