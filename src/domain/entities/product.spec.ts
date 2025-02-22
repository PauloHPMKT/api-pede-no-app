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

  it('should create a product with name, price and description', () => {
    const sut = makeSut();
    sut['description'] = 'Any Product Description';
    expect(sut).toStrictEqual(
      expect.objectContaining({
        name: 'Product Name',
        price: 25,
        imagePath: null,
        description: 'Any Product Description',
        ingredients: [],
        categories: [],
      }),
    );
  });

  it('should check if created_at is a Date', () => {
    const sut = makeSut();
    expect(sut.created_at).toBeInstanceOf(Date);
  });

  it('should be able to create a product with all data', () => {
    const sut = makeSut();
    sut['imagePath'] = 'imagePath.jpg';
    sut['description'] = 'Any Product Description';
    sut['ingredients'] = ['ingredient1', 'ingredient2'];
    sut['categories'] = ['category1', 'category2'];
    sut['created_at'] = new Date('2025-01-01');

    const props = {
      name: 'Product Name',
      price: 25,
      imagePath: 'imagePath.jpg',
      description: 'Any Product Description',
      ingredients: ['ingredient1', 'ingredient2'],
      categories: ['category1', 'category2'],
      created_at: new Date('2025-01-01'),
    };
    expect(sut).toStrictEqual(expect.objectContaining(props));
  });
});
