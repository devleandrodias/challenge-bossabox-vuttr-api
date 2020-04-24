import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthorizationController {
  @Get()
  async get() {
    return {
      ok: 'authorization...',
    };
  }
}
