import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserController } from './user/user.controller';
import { CategoryModule } from './category/category.module';
import { TransnameController } from './transname/transname.controller';

@Module({
  imports: [ProductModule, CategoryModule],
  controllers: [AppController, UserController, TransnameController],
  providers: [AppService],
})
export class AppModule {}
