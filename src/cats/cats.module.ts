import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatsRepository } from './cats.repository';
import { HttpModule } from '@nestjs/axios';
import { CatsProviderClient } from '../core/cat-provider.client';

@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository, CatsProviderClient],
})
export class CatsModule {}
