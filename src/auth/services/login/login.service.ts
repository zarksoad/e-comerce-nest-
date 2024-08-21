import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserValidator } from '../register/userValidator.service.';
import { MatchPassword } from './checkPassword.service';
import { GenerateToken } from './token.service';

interface ILoginService {
  checkingCredential(email: string, password: string): Promise<{}>;
}

@Injectable()
export class LoginService implements ILoginService {
  constructor(
    private readonly matchPassword: MatchPassword,
    private readonly userValidator: UserValidator,
    private readonly generateToken: GenerateToken,
  ) {}

  async checkingCredential(email: string, password: string): Promise<{}> {
    const user = await this.userValidator.userExists(email);
    const checkingPassword = await this.matchPassword.checkingPassword(
      password,
      user?.password,
    );
    if (!checkingPassword) {
      throw new UnauthorizedException();
    }
    const token = await this.generateToken.token(user.id, user.roleId);
    return token;
  }
}
