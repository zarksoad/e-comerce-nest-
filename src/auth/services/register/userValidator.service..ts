import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Repository } from 'typeorm';

interface IUserValidator {
  userExists(email: string): Promise<User | null>;
}

@Injectable()
class UserValidator implements IUserValidator {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async userExists(email: string): Promise<User | null> {
    console.log(email,"desde user exists")
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}

export { IUserValidator, UserValidator };
