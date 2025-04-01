import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { EstudantesService } from './estudantes.service';
@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly estudantesService: EstudantesService) {}
  @Post()
  create(@Body() body: any) {
    return this.estudantesService.create(body);
  }
  @Get()
  findAll() {
    return this.estudantesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudantesService.findOne(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudantesService.remove(+id);
  }
}
