import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return [
      {
        id: 1,
        name: 'Talha',
        email: 'mdmehedihasantalha2006@gmail.com',
      },
      {
        id: 2,
        name: 'Huzaifa',
        email: 'huzaifa@gmail.com',
      },
      {
        id: 1,
        name: 'Hanji',
        email: 'pagla@gmail.com',
      },
    ];
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return {
      id: 2,
      name: 'Huzaifa' + id,
      email: 'huzaifa@gmail.com',
    };
  }
}
