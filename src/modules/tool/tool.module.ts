import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolSchema } from './schemas/tool.schema';
import { ToolService } from './services/tool.service';
import { ToolController } from './controllers/tool.controller';
import { ToolRepository } from './repositories/tool.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Tool',
        schema: ToolSchema,
      },
    ]),
  ],
  controllers: [ToolController],
  providers: [ToolRepository, ToolService],
})
export class ToolModule {}
