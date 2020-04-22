import { Controller, Get } from '@nestjs/common';

@Controller()
export class ToolController {
  @Get()
  async get() {
    return {
      ok: 'Por aqui tudo okay...',
    };
  }
}
