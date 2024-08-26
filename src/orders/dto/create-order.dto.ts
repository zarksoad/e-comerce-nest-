import {
  IsString,
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  productIds: string[];

  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  @IsNotEmpty()
  totalPrice: number;
}
