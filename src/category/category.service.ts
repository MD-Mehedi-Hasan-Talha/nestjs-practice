import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private category = ['talha', 'hanjala'];

  getAllCategory(): string[] {
    return this.category;
  }

  getCategoryByName(name: string) {
    return this.category.find((cat) => cat === name);
  }

  createCategory(data: string) {
    this.category.push(data);
    return {
      data,
    };
  }

  editCategory(name: string, data: string) {
    const existingCategory = this.category.findIndex((cat) => cat === name);
    if (existingCategory < 0) {
      throw new NotFoundException('No record found');
    }
    this.category[existingCategory] = data;
    return {
      data,
    };
  }

  deleteCategory(name: string) {
    const existingCategory = this.category.findIndex((cat) => cat === name);
    if (existingCategory < 0) {
      throw new NotFoundException('No record found');
    }
    this.category.splice(existingCategory, 1);
    return {
      message: 'Category deleted successfully',
    };
  }
}
