import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

interface IfindByIdsProducts {
  findByIds(productIds: string[]): Promise<Product[] | null>;
}

@Injectable()
export class FindByIdsProducts implements IfindByIdsProducts {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findByIds(productIds: string[]): Promise<Product[] | null> {
    return this.productRepository.find({
      where: {
        id: In(productIds),
      },
    });
  }
}
