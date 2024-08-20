import { Injectable } from '@nestjs/common';
import * as bycript from 'bcrypt';

interface IPasswordHasher {
  hash(password: string, saltRounds: number): Promise<string>;
}

@Injectable()
export class BcryptPasswordHasher implements IPasswordHasher {
  async hash(password: string, saltRounds: number): Promise<string> {
    return bycript.hash(password, saltRounds);
  }
}

@Injectable()
export class CryptPasswordService {
  constructor(private readonly passwordHasher: BcryptPasswordHasher) {}
  async cryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return this.passwordHasher.hash(password, saltRounds);
  }
}
