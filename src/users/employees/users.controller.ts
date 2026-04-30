import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { NATS_SERVICE } from '@/src/config';
import { ClientProxy } from '@nestjs/microservices';
import { InviteUserDto, CreateAdminDto } from './dto';

@Controller('users')
export class UsersController {
    constructor(
      @Inject(NATS_SERVICE) private readonly client: ClientProxy
    ) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Post('/inviteUser')
  inviteUser(@Body() inviteUserDto: InviteUserDto) {
    return this.client.send({cmd:'inviteUser'}, inviteUserDto);
  }


  @Get('/users/findAll')
  findAll() {
    return this.client.send({cmd:'findAllUsers'}, {});
  }

  @Get('/users/:id')
  findOne(@Param('id') id: string) {
  return this.client.send({cmd: "findUserById"}, id);
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
