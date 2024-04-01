import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('CATS') // Etiqueta para el controlador
@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({
    summary: 'Obtener información de ejemplo',
    description: 'Este endpoint devuelve información de ejemplo.',
  }) // Descripción para el método
  @Get(':catId')
  getCat(@Param('catId') catId: string): string {
    return this.catsService.getCat(catId);
  }
}
