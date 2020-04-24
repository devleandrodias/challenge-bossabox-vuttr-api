require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolModule } from './modules/tool/tool.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    ToolModule,
    AuthorizationModule,
  ],
})
export class AppModule {}
