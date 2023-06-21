import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from "../../types";
import { CreateUserDto } from "../../dto/CreateUser.dto";
import {User as UserEntity} from '../../../typeorm/User'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>) {
  }

  private users: User[] = []

  getUsers(){
    return this.users.map(user => new SerializedUser(user));
  }
  getUserByUsername(username: string){
    return this.users.find(user => user.username === username)
  }
  getUserById(id: number){
    return this.users.find(user => user.id === id)
  }

  createUser(createUserDto: CreateUserDto){
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string){
    return this.userRepository.findOneBy({username})
  }
}
