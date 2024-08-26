import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateOrderService } from './services/createOrders/create-order.service';

@Injectable()
export class OrdersService {
  constructor(private readonly createOrder:CreateOrderService){}
  async create(createOrderDto: CreateOrderDto) {
    return this.createOrder.createOrder(createOrderDto)
  }

}
