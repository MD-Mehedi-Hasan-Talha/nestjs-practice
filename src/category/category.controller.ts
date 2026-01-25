import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryServices: CategoryService) {}

  @Get()
  getAllCategories() {
    try {
      return this.categoryServices.getAllCategory();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new InternalServerErrorException(error.message);
      }
      throw new InternalServerErrorException('Unknown error');
    }
  }

  //   @Get()
}
