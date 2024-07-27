import { ConfigModule } from '@nestjs/config';

export const globalModules = [ConfigModule.forRoot()];
