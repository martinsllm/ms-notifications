import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: { id: string; email: string; name: string }) {
    const user = await this.prismaService.users.create({
      data,
    });

    return user;
  }
}
