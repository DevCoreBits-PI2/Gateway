import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { NATS_SERVICE } from '@/src/config';
import { ClientProxy } from '@nestjs/microservices';
import { CreateAdminDto } from './dto';

@Controller('admin')
export class AdminController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('/create-admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.client.send({ cmd: 'createAdmin' }, createAdminDto);
  }

  @Get('/admin')
  findAllAdmins() {
    return this.client.send({ cmd: 'findAllAdmins' }, {});
  }

  @Get('/:id')
  findAdminById(@Param('id') id: number) {
    return this.client.send({ cmd: 'findAdminById' }, id);
  }


  @Get('/blockUser/:id') /* Se envía la ID del usuario que se quiere bloquear. */
  blockUser(@Param('id') id: number) {
    return this.client.send({ cmd: 'blockUser' }, id);
  }

  @Get('/unblockUser/:id') /* Se envía la ID del usuario que se quiere desbloquear. */
  unblockUser(@Param('id') id: number) {
    return this.client.send({ cmd: 'unblockUser' }, id);
  }
  
  @Get('/suspendEmployee/:id') /* Se envía la ID del empleado que se quiere suspender. */
  suspendEmployee(@Param('id') id: number) {
    return this.client.send({ cmd: 'suspendEmployee' }, id);
  }

  @Get('/resendInvitation/:id')
  resendInvitation(@Param('id') id: number) {
    return this.client.send({ cmd: 'resendInvitation' }, id);
  }

}
