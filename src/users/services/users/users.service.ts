import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from "../../types";
import { plainToClass } from "class-transformer";

@Injectable()
export class UsersService {
  private users: User[] = [{
    username: 'Alexandr',
    password: 'Nt'
  },
    {
      username: 'Alexandr1',
      password: 'Nt1'
    },
    {
      username: 'Alexandr2',
      password: 'Nt1'
    },
  ]

  getUsers(){
    return this.users.map(user => new SerializedUser(user));
  }
  getUserByUsername(username: string){
    return this.users.find(user => user.username === username)
  }
}
