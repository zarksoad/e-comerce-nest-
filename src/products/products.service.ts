import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductService } from './services/create/createProduct.service';
import { FindAllProductsService } from './services/findAll/findAllProducts.service';
import { findOneProductService } from './services/findOne/findOne.service';
import { UpdateProductService } from './services/update/updateProduct.service';
import { DeleteProductService } from './services/delete/deleteProduct.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly findAllService: FindAllProductsService,
    private readonly findOneService: findOneProductService,
    private readonly updateProductService: UpdateProductService,
    private readonly DeleteProductService: DeleteProductService,
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

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.updateProductService.updateProduct(id, updateProductDto);
  }

  async remove(id: string) {
    return this.DeleteProductService.deleteProduct(id);
  }
}
