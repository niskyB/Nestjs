import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

describe('CustomersController', () => {
  let controller: CustomersController;
  let customerService: CustomersService;
  beforeEach(() => {
    customerService = new CustomersService();
    controller = new CustomersController(customerService);
  });

  it('should return an array of customers', async () => {
    const result = [
      {
        name: 'string',
        age: 12,
      },
    ];
    jest.spyOn(customerService, 'findAll').mockImplementation(() => result);

    expect(await controller.findAll()).toBe(result);
  });
});
