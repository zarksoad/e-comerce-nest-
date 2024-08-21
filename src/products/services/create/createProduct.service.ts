import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { ExistProductService } from './existProduct.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';

interface ICreateProduct {
  newProduct({ name, price, description }: CreateProductDto): Promise<Product>;
}

@Injectable()
export class CreateProductService implements ICreateProduct {
  constructor(
    private readonly exitsProduct: ExistProductService,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async newProduct({
    name,
    price,
    description,
  }: CreateProductDto): Promise<Product> {
    const product = await this.exitsProduct.product(name);
    if (product) {
      throw new NotFoundException('Product already in database');
    }
    const newProduct = this.productRepository.create({
      name,
      price,
      description,
    });
    return await this.productRepository.save(newProduct);
  }
}
