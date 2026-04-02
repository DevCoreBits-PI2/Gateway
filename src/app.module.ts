import { Module } from '@nestjs/common';
import { AdministrativeDataModule } from './administrative-data/administrative-data.module';
import { UsersModule } from './users/users.module';
import { TrajectoryModule } from './trajectory/trajectory.module';

@Module({
  imports: [AdministrativeDataModule, UsersModule, TrajectoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}