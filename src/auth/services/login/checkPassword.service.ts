import { Injectable } from '@nestjs/common';
import * as bycript from 'bcrypt';

interface IMatchPassword {
  checkingPassword(password: string, hashPassword: string): Promise<boolean>;
}

@Injectable()
export class MatchPassword implements IMatchPassword {
  async checkingPassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    const validator = await bycript.compare(password, hashPassword);
    return validator;
  }
}
