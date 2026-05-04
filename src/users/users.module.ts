import { Module } from '@nestjs/common';
import { UsersController } from './employees/users.controller';
import { NatsModule } from '@/src/transports/nats.module';
import { AdminController } from './admin/admin.controller';
import { AuthController } from './auth/auth.controller'

@Module({
  controllers: [UsersController, AdminController, AuthController],
  providers: [],
  imports: [
    NatsModule
  ]

})
export class UsersModule {}
