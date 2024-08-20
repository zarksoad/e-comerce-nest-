import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface ITokenGenerator {
  token(
    id: string,
    roleId: string,
  ): Promise<{ message: string; access_token: string }>;
}

@Injectable()
export class GenerateToken implements ITokenGenerator {
  constructor(private jwtService: JwtService) {}

  async token(
    id: string,
    roleId: string,
  ): Promise<{ message: string; access_token: string }> {
    const payload = { userId: id, roleId: roleId };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      message: 'This is your token',
      access_token: access_token,
    };
  }
}
