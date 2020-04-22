import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolController } from './controllers/tool.controller';
import { ToolSchema } from './schemas/tool.schema';

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
})
export class ToolModule {}
