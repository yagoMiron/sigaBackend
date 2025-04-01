import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { MatriculasService } from './matriculas.service';
@Controller('disciplinas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}
  @Post()
  create(@Body() body: any) {
    return this.matriculasService.create(body);
  }
  @Get()
  findAll() {
    return this.matriculasService.findAll();
  }
  @Get(':fk_disciplinas_id/:fk_estudantes_fk_usuarios_i')
  findOne(
    @Param('fk_disciplinas_id') fk_disciplinas_id: string,
    @Param('fk_estudantes_fk_usuarios_i') fk_estudantes_fk_usuarios_id: string,
  ) {
    return this.matriculasService.findOne(
      +fk_disciplinas_id,
      +fk_estudantes_fk_usuarios_id,
    );
  }
  @Put(':fk_disciplinas_id/:fk_estudantes_fk_usuarios_i')
  update(
    @Param('fk_disciplinas_id') fk_disciplinas_id: string,
    @Param('fk_estudantes_fk_usuarios_i') fk_estudantes_fk_usuarios_id: string,
    @Body() body: any,
  ) {
    return this.matriculasService.update(
      +fk_disciplinas_id,
      +fk_estudantes_fk_usuarios_id,
      body,
    );
  }
  @Delete(':fk_disciplinas_id/:fk_estudantes_fk_usuarios_i')
  remove(
    @Param('fk_disciplinas_id') fk_disciplinas_id: string,
    @Param('fk_estudantes_fk_usuarios_i') fk_estudantes_fk_usuarios_id: string,
  ) {
    return this.matriculasService.remove(
      +fk_disciplinas_id,
      +fk_estudantes_fk_usuarios_id,
    );
  }
}
