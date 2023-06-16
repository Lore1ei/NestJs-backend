import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from "../../types";

@Injectable()
export class UsersService {
  private users: User[] = [{
    username: 'Alexandr',
    password: 'Nt',
    id: 1,
  },
    {
      username: 'Alexandr1',
      password: 'Nt1',
      id: 2
    },
    {
      username: 'Alexandr2',
      password: 'Nt1',
      id: 3,
    },
  ]

  getUsers(){
    return this.users.map(user => new SerializedUser(user));
  }
  getUserByUsername(username: string){
    return this.users.find(user => user.username === username)
  }
  getUserById(id: number){
    return this.users.find(user => user.id === id)
  }
}
