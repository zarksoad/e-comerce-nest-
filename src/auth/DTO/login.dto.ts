import { RegisterDto } from './register.dto';
import { PartialType } from '@nestjs/mapped-types';

export class LoginDto extends PartialType(RegisterDto) {}
