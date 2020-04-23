import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolController } from './controllers/tool.controller';
import { ToolSchema } from './schemas/tool.schema';
import { ToolService } from './services/tool.service';

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
  providers: [ToolService],
})
export class ToolModule {}
