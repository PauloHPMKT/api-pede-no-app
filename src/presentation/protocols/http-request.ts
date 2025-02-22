export interface HttpRequest<T> {
  body?: T;
  headers?: any;
  params?: any;
  file?: any;
}
