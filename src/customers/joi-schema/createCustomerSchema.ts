/* eslint-disable prettier/prettier */
import * as Joi from 'joi';
import { CreateCustomerDto } from '../dto/createCustomer.dto';

export const createCustomerSchema = Joi.object<CreateCustomerDto>({
  name: Joi.string().min(3).max(255).trim().required(),
  age: Joi.number().min(15).required(),
});
