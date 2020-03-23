import {HttpExceptionInterface} from "./interface";

export class HttpException {
  private data: any;
  private code: number;
  private message: string;
  constructor(obj: HttpExceptionInterface) {
    this.code = obj.code;
    this.message = obj.message;
    this.data = obj.data;
  }
}
