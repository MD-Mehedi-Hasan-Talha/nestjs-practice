import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [ProductModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
