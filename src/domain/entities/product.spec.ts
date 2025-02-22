import { Product } from './Product';

describe('Product Entity', () => {
  it('should be defined', () => {
    const sut = new Product();
    expect(sut).toBeDefined();
  });
});
