import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product } from 'src/products/entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExistProductByIdService } from './existProductById.service';

interface IupdateProduct {
  updateProduct(
    id: string,
    updateProduct: UpdateProductDto,
  ): Promise<Product | null>;
}

@Injectable()
export class UpdateProductService implements IupdateProduct {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly existProductByIdService: ExistProductByIdService,
  ) {}
  async updateProduct(
    id: string,
    updateProduct: UpdateProductDto,
  ): Promise<Product | null> {
    const product = await this.existProductByIdService.product(id);
    if (!product) {
      throw new NotFoundException();
    }
    Object.assign(product, updateProduct);
    await this.productRepository.save(product);

    return product;
  }
}
