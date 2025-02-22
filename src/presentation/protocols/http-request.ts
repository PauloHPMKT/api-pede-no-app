export interface HttpRequest<T = any> {
  body?: T;
  headers?: any;
  params?: any;
  file?: any;
}
