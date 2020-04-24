import { Tool } from '../../model/tool.model';

export interface IToolRepository {
  findAll(): Promise<Tool[]>;
  findAllByTag(tag: string): Promise<Tool[]>;
  create(data: Tool): Promise<Tool>;
  update(id: string, data: Tool): Promise<Tool>;
  remove(id: string): void;
}
