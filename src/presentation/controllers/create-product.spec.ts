import { CreateProductDto } from '../dtos/create-product-dto';
import { HttpRequest } from '../protocols/http-request';
import { CreateProductController } from './create-product';

const makeSut = (): CreateProductController => {
  return new CreateProductController();
};

describe('CreateProductController', () => {
  it('should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('should return 400 if no name is provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        price: 25,
      },
    };
    const httpResponse = sut.handle(
      httpRequest as HttpRequest<CreateProductDto>,
    );
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new Error('Missing param: name'));
  });

  it('should return 400 if no price is provided', () => {
    const sut = makeSut();
    const httpRequest = {
      body: {
        name: 'Product Name',
      },
    };
    const httpResponse = sut.handle(
      httpRequest as HttpRequest<CreateProductDto>,
    );
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new Error('Missing param: price'));
  });
});
