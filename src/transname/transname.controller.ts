import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('transname')
export class TransnameController {
  @Post()
  transformName(@Body('name', new UppercasePipe()) name: string) {
    return `name: ${name}`;
  }
}
