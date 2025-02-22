export interface CreateProductDto {
  name: string;
  price: number;
  imagePath?: string;
  description?: string;
  ingredients?: string[];
  categories?: string[];
}
