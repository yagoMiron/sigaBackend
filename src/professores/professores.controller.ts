import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { ProfessoresService } from './professores.service';
@Controller('professores')
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}
  @Post()
  create(@Body() body: any) {
    return this.professoresService.create(body);
  }
  @Get()
  findAll() {
    return this.professoresService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professoresService.findOne(+id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professoresService.remove(+id);
  }
}
