import { CreateProductDto } from '../dtos/create-product-dto';
import { Controller } from '../protocols/controller';
import { HttpRequest } from '../protocols/http-request';
import { HttpResponse } from '../protocols/http-response';

export class CreateProductController implements Controller {
  handle(httpRequest: HttpRequest<CreateProductDto>): HttpResponse {
    const requiredFields = ['name', 'price'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`),
        };
      }
    }
  }
}
