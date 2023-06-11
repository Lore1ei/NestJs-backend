import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer(){
    return{
      id: 1,
      email: 'Alexandr@mail.ru',
      createdAt: new Date(),
    }
  }
}
