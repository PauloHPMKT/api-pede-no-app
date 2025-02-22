import { HttpRequest } from './http-request';
import { HttpResponse } from './http-response';

export interface Controller<T = any> {
  handle(httpRequest: HttpRequest<T>): HttpResponse;
}
