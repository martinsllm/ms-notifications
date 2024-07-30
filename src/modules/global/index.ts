import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './pubsub/pubsub.module';
import { PrismaModule } from './prisma/prisma.module';

export const globalModules = [
  PrismaModule,
  ConfigModule.forRoot(),
  PubSubModule,
];
