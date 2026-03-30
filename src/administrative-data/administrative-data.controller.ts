import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';
import { CreateAreaDto } from './dto';
import { catchError } from 'rxjs';

@Controller('administrative-data')
export class AdministrativeDataController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  //-------- AREAS ---------
  @Post('/create-area')
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.client.send({cmd:'createArea'}, createAreaDto)
    .pipe(
      catchError((err) => {
        throw new RpcException(err)
      })
    )
  }

  @Get('/findAll')
  findAll() {
    return this.client.send({cmd:'findAllAdministrativeData'}, {});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.administrativeDataService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAdministrativeDatumDto: UpdateAdministrativeDatumDto) {
  //   return this.administrativeDataService.update(+id, updateAdministrativeDatumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.administrativeDataService.remove(+id);
  // }
}
