import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from "../../dtos/CreateCustomer.dto";
import { Customers } from "../../types/Customers";

@Injectable()
export class CustomersService {
  private customers:Customers[] = [{
      id: 1,
      name: 'Alexandr',
      email: 'Alexandr@mail.ru',
  },
    {
      id: 2,
      name: 'Adam',
      email: 'adam@mail.ru',
  },
    {
      id: 3,
      name: 'Spencer',
      email: 'spencer@mail.ru',
  },
  ]

  findCustomerById(id: number){
    return this.customers.find(user => user.id === id)
  }
  createCustomer(customerDto: CreateCustomerDto){
    this.customers.push(customerDto)
  }
  getCustomers(){
    return this.customers;
  }
}
