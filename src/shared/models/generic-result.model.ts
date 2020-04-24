export class GenericResult {
  constructor(message: string, success: boolean, data: any, error: any) {
    this.message = message;
    this.success = success;
    this.data = data;
    this.error = error;
  }

  public message: string;
  public success: boolean;
  public data: any;
  public error: any;
}
