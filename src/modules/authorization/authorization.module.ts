import { Module } from '@nestjs/common';
import { AuthorizationController } from './controllers/user.controller';

@Module({
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
