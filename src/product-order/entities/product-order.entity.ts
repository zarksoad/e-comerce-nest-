import { Order } from 'src/orders/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productOrder')
export class ProductOrder {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  OrderId: string;

  @ManyToOne(()=>Product,product => product)
  @JoinColumn({name:"productId"})
  product:Product

  @ManyToOne(()=>Order,order => order)
  @JoinColumn({name:"productId"})
  order:Order
}

