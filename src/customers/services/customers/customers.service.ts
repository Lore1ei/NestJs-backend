import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [{
      id: 1,
      email: 'Alexandr@mail.ru',
      createdAt: new Date(),
  },
    {
      id: 2,
      email: 'adam@mail.ru',
      createdAt: new Date(),
  },
    {
      id: 3,
      email: 'spencer@mail.ru',
      createdAt: new Date(),
  },
  ]

  findCustomerById(id: number){
    return this.users.find(user => user.id === id)
  }
}
