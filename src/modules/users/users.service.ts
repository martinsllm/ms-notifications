import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(data: { id: string; email: string; name: string }) {
    return await this.repository.create(data);
  }
}
