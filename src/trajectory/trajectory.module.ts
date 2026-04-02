import { Module } from '@nestjs/common';
import { TrajectoryController } from './trajectory.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [TrajectoryController],
  providers: [],
  imports: [
    NatsModule
  ]
})
export class TrajectoryModule {}
