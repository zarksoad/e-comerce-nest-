import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

interface IfindAllProduct {
  all(): Promise<Product[]>;
}

@Injectable()
export class FindAllProductsService implements IfindAllProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async all(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }
}
