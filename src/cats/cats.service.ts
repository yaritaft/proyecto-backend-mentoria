import { Injectable } from '@nestjs/common';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {}

  getCat(catId: string): string {
    return this.catsRepository.getCat(catId);
  }
}
