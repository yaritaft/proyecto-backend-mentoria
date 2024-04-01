import { Injectable } from '@nestjs/common';
import { CatsProviderClient } from '../core/cat-provider.client';

@Injectable()
export class CatsRepository {
  constructor(private readonly catsProviderClient: CatsProviderClient) {}

  getCat(catId: string): any {
    return this.catsProviderClient.getCatV1(catId);
  }
}
