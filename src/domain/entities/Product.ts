export class Product {
  public name: string;
  public price: number;
  public imagePath?: string;
  public description?: string;
  public ingredients?: string[];
  public categories?: string[];

  constructor(props: Partial<Product>) {
    Object.assign(this, props);

    this.imagePath = props.imagePath ?? null;
    this.description = props.description ?? null;
    this.ingredients = props.ingredients ?? [];
    this.categories = props.categories ?? [];
  }
}
