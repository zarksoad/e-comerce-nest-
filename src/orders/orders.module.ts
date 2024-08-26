import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { CreateOrderService } from './services/createOrders/create-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { FindByIdsProducts } from 'src/products/services/findProductByIds/findProductByIds.service';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order,Product])],
  controllers: [OrdersController],
  providers: [OrdersService,CreateOrderService,FindByIdsProducts],
})
export class OrdersModule {}
