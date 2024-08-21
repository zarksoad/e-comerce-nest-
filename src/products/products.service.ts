import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductService } from './services/create/createProduct.service';
import { FindAllProductsService } from './services/findAll/findAllProducts.service';
import { findOneProductService } from './services/findOne/findOne.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllService: FindAllProductsService,
    private readonly findOneService: findOneProductService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return this.createProductService.newProduct(createProductDto);
  }

  findAll() {
    return this.findAllService.all();
  }

  async findOne(id: string) {
    return this.findOneService.product(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
