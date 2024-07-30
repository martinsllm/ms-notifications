import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export default class UserExternalController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users-user-created')
  async createUser(data: { id: string; email: string; name: string }) {
    return await this.usersService.create(data);
  }
}
