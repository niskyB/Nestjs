import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [];

  create(customer: Customer) {
    this.customers.push(customer);
  }

  findAll(): Customer[] {
    return this.customers;
  }
}
