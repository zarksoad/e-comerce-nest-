import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterService } from './services/register.services';
import { User } from './entity/user.entity';
import { RegisterDto } from './DTO/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly register: RegisterService) {}

  async registerUser({ email, password, roleId }: RegisterDto): Promise<User> {
    const user = await this.register.registerNewUser({
      email,
      password,
      roleId,
    });
    return user;
  }
}
