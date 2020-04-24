export class Tool {
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

  public title: string;
  public link: string;
  public description: string;
  public tags: string[];
}
