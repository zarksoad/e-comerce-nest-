import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { RegisterService } from './services/register/register.services';
import { UserValidator } from './services/register/userValidator.service.';
import {
  BcryptPasswordHasher,
  CryptPasswordService,
} from './services/register/crypt.password';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoginService } from './services/login/login.service';
import { MatchPassword } from './services/login/checkPassword.service';
import { GenerateToken } from './services/login/token.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [
    AuthService,
    RegisterService,
    CryptPasswordService,
    UserValidator,
    BcryptPasswordHasher,
    LoginService,
    MatchPassword,
    GenerateToken,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [JwtStrategy],
})
export class AuthModule {}
