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
import { UpdateUserDto } from './dto/update-user.dto';
import { NATS_SERVICE } from '@/src/config';
import { ClientProxy } from '@nestjs/microservices';
import { InviteUserDto,  UpdateProfileDto, UpdateEmployeeDto} from './dto';

@Controller('employees')
export class UsersController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Post('/inviteUser')
  inviteUser(@Body() inviteUserDto: InviteUserDto) {
    return this.client.send({ cmd: 'inviteUser' }, inviteUserDto);
  }

  @Get('/findAll')
  findAll() {
    return this.client.send({ cmd: 'findAllUsers' }, {});
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findUserById' }, id);
  }

  @Get('/getMyProfile/:id')
  getMyProfile(@Param('id') id: string) {
    return this.client.send({ cmd: 'getMyProfile' }, id);
  }

  @Get('/getSubordinates/:id') /* Se pasa ID del gerente que tiene subordinados. */
  getSubordinates(@Param('id') id: string) {
    return this.client.send({ cmd: 'getSubordinates' }, id);
  }

  @Patch('/updateUser/:id') /* Este es para que un empleado pueda cambiar su propio perfil. */ 
  updateUser(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.client.send({ cmd: 'updateUser' }, { id, ...updateProfileDto });
  }

  @Patch('/updateEmployee/:id') /* Se envía la ID del usuario que se quiere cambiar, además, este es para cambiar cargo, jefe, o estado.*/ 
  updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.client.send({ cmd: 'updateEmployee' }, { id, ...updateEmployeeDto });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}