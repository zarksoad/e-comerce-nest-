import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { RegisterDto } from './DTO/register.dto';
import { RegisterService } from './services/register/register.services';
import { LoginService } from './services/login/login.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly registerService: RegisterService,
    private readonly loginService: LoginService,
  ) {}

  async registerUser({ email, password, roleId }: RegisterDto): Promise<User> {
    const user = await this.registerService.registerNewUser({
      email,
      password,
      roleId,
    });
    return user;
  }
  async login(email: string, password: string): Promise<{}> {
    const token = await this.loginService.checkingCredential(email, password);
    return token;
  }
}
