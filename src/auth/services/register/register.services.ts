import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '../../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from '../../DTO/register.dto';
import { CryptPasswordService } from './crypt.password';
import { UserValidator } from './userValidator.service.';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly cryptPassword: CryptPasswordService,
    private readonly userValidator: UserValidator,
  ) {}

  async registerNewUser({
    email,
    password,
    roleId,
  }: RegisterDto): Promise<User> {
    try {
      const verifyEmail = await this.userValidator.userExists(email);
      if (verifyEmail === null) {
        const hashPassword = await this.cryptPassword.cryptPassword(password);
        const newUser = this.userRepository.create({
          email,
          password: hashPassword,
          roleId,
        });
        return await this.userRepository.save(newUser);
      }
      throw new ConflictException('email has been used');
    } catch (error) {
      throw new ConflictException(
        'Error registering the user ' + error.message,
      );
    }
  }
}
