import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterService } from './services/register.services';
import {
  BcryptPasswordHasher,
  CryptPasswordService,
} from './services/crypt.password';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserValidator } from './services/userValidator.service.';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    AuthService,
    RegisterService,
    CryptPasswordService,
    UserValidator,
    BcryptPasswordHasher,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
