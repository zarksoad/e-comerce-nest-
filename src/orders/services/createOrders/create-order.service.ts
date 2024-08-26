import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { FindByIdsProducts } from '../../../products/services/findProductByIds/findProductByIds.service';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';

interface IcreateOrder {
  createOrder({ userId, productIds, totalPrice }:CreateOrderDto): Promise<Order>;
}

@Injectable()
export class CreateOrderService implements IcreateOrder {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly findByIdsProducts: FindByIdsProducts,
  ) {}

 async createOrder({ userId, productIds, totalPrice }:CreateOrderDto): Promise<Order>{
    const products = await this.findByIdsProducts.findByIds(productIds);
    if (products === null) {
      throw new NotFoundException('This products are not available');
    }
    const order = this.orderRepository.create({ userId, products, totalPrice });
    return this.orderRepository.save(order);
  }
}
