/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
