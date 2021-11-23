import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Res,
  UseFilters,
  ParseUUIDPipe,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { JoiValidationPipe } from 'src/pipe/schema-validator.pipe';
import { CustomersService } from './customers.service';
import { Roles } from './decorator/role.decorator';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { Customer } from './interfaces/customer.interface';
import { createCustomerSchema } from './joi-schema/createCustomerSchema';

@Controller('customers')
@UseFilters(HttpExceptionFilter) // controller scoped
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  //@UseFilters(HttpExceptionFilter) // method scoped
  @HttpCode(200)
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  // use pipe to transform param
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return `This action returns a #${id} customer`;
  }

  @Post()
  @HttpCode(201)
  @Roles('admin')
  @UsePipes(new JoiValidationPipe(createCustomerSchema))
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.create(createCustomerDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ): string {
    return `This action updates a #${id} customer`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} customer`;
  }
}
