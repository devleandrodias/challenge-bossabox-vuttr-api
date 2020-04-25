require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolSchema } from './schemas/tool.schema';
import { ToolService } from './services/tool.service';
import { ToolController } from './controllers/tool.controller';
import { ToolRepository } from './repositories/tool.repository';
import { CreateToolContract } from './contracts/create-tool.contract';

@Module({
  imports: [
    JwtModule.register({
      secretOrKeyProvider: () => process.env.KEY_TOKEN,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    MongooseModule.forFeature([
      {
        name: 'Tool',
        schema: ToolSchema,
      },
    ]),
  ],
  controllers: [ToolController],
  providers: [ToolRepository, ToolService, CreateToolContract],
})
export class ToolModule {}
