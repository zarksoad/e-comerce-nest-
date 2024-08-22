import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { ExistProductByIdService } from '../update/existProductById.service';

interface IdeleteProduct {
  deleteProduct(id: string): Promise<void>;
}

@Injectable()
export class DeleteProductService implements IdeleteProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly existProductById: ExistProductByIdService,
  ) {}

  async deleteProduct(id: string): Promise<void> {
    const product = await this.existProductById.product(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.productRepository.delete(id);
  }
}
