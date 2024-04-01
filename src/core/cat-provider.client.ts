import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsProviderClient {
  constructor(private readonly httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getCatV1(catId: string): Promise<any> {
    const response = await this.httpService.axiosRef.get('http://google.com');
    return response.data;
  }

  async getCat(): Promise<any> {
    const response = await this.httpService.axiosRef.get('http://google.com');
    return response.data;
  }
}
