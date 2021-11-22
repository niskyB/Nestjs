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
} from '@nestjs/common';
import { Response } from 'express';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { Customer } from './interfaces/customer.interface';

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
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} customer`;
  }

  @Post()
  @HttpCode(201)
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
