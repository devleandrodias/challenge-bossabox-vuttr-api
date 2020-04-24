export interface IContract {
  errors: string[];
  validate(model: any): boolean;
}
