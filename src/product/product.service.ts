import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Mobile',
      price: 10000,
    },
    {
      id: 2,
      name: 'Motherboard',
      price: 5000,
    },
    {
      id: 3,
      name: 'GPU',
      price: 7000000,
    },
    {
      id: 4,
      name: 'RAM',
      price: 5500,
    },
    {
      id: 5,
      name: 'Keyboard',
      price: 200,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(productId) {
    return this.products.find(({ id }) => productId === id);
  }
}
