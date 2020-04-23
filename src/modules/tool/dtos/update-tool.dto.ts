export class UpdateToolDto {
  constructor(
    public name: string,
    public title: string,
    public link: string,
    public description: string,
    public tags: string[],
  ) {}
}
