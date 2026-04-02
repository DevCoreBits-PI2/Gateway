import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateTrajectoryDto } from './dto/create-trajectory.dto';
import { UpdateTrajectoryDto } from './dto/update-trajectory.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('trajectory')
export class TrajectoryController {
    constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  // @Post()
  // create(@Body() createTrajectoryDto: CreateTrajectoryDto) {
  //   return this.trajectoryService.create(createTrajectoryDto);
  // }

  @Get('/findAll')
  findAll() {
    return this.client.send({cmd:'findAllTrajectory'}, {});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.trajectoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrajectoryDto: UpdateTrajectoryDto) {
  //   return this.trajectoryService.update(+id, updateTrajectoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trajectoryService.remove(+id);
  // }
}
