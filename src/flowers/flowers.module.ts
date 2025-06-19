import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FlowersService } from './flowers.service';
import { FlowersController } from './flowers.controller';

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService],
})
export class FlowersModule {}
