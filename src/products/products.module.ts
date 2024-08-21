import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CreateProductService } from './services/create/createProduct.service';
import { ExistProductService } from './services/create/existProduct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService, CreateProductService, ExistProductService],
})
export class ProductsModule {}
