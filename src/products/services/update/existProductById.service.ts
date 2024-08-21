import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

interface IExistProductById {
  product(id: string): Promise<Product | null>;
}

@Injectable()
export class ExistProductByIdService implements IExistProductById {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async product(id: string): Promise<Product | null> {
    const product = await this.productRepository.findOne({ where: { id } });
    return product;
  }
}
