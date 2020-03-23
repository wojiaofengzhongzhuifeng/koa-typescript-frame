import {HttpExceptionInterface} from "./interface";

export class HttpException {
  data: any;
  code: number;
  message: string;
  constructor(obj: HttpExceptionInterface) {
  }
}

export class SuccessHttpException extends HttpException{
  constructor(props?: HttpExceptionInterface) {
    super(props);
    this.code = props.code || 0;
    this.message = props.message || '请求成功';
    this.data = props.data || null;
  }
}

export class RequestTypeException extends HttpException{
  constructor(props?: HttpExceptionInterface) {
    super(props);
    this.code = props ? props.code : -1;
    this.message = props ? props.message : '请求参数类型错误';
    this.data = props ? props.data : null;
  }
}