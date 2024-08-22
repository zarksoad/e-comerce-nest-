import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CreateProductService } from './services/create/createProduct.service';
import { ExistProductService } from './services/create/existProduct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FindAllProductsService } from './services/findAll/findAllProducts.service';
import { findOneProductService } from './services/findOne/findOne.service';
import { UpdateProductService } from './services/update/updateProduct.service';
import { ExistProductByIdService } from './services/update/existProductById.service';
import { DeleteProductService } from './services/delete/deleteProduct.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    CreateProductService,
    ExistProductService,
    FindAllProductsService,
    findOneProductService,
    UpdateProductService,
    ExistProductByIdService,
    DeleteProductService,
  ],
})
export class ProductsModule {}
