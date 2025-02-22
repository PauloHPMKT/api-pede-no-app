import { Product } from './Product';

const makeSut = (): Product => {
  const props = {
    name: 'Product Name',
    price: 25,
  };
  return new Product(props);
};

describe('Product Entity', () => {
  it('should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('should be able to creat a product with a name and price', () => {
    const sut = makeSut();
    expect(sut).toStrictEqual(
      expect.objectContaining({
        name: 'Product Name',
        price: 25,
        imagePath: null,
        description: null,
        ingredients: [],
        categories: [],
      }),
    );
  });

  it('should check if created_at is a Date', () => {
    const sut = makeSut();
    expect(sut.created_at).toBeInstanceOf(Date);
  });
});
