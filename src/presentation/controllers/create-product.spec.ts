import { CreateProductController } from './create-product';

const makeSut = (): CreateProductController => {
  return new CreateProductController();
};

describe('CreateProductController', () => {
  it('should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });
});
