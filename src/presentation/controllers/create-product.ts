interface HttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  file?: any;
}

interface HttpResponse {
  statusCode: number;
  body: any;
}

export class CreateProductController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    if (!httpRequest.body.price) {
      return {
        statusCode: 400,
        body: new Error('Missing param: price'),
      };
    }
  }
}
