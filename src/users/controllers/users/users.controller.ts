import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject, NotFoundException,
  Param, ParseIntPipe, UseFilters,
  UseInterceptors
} from "@nestjs/common";
import { UsersService } from "../../services/users/users.service";
import { SerializedUser } from "../../types";
import { HttpExceptionFilter } from "../../filters/HttpException.filter";
import { UserNotFoundException } from "../../exception/UserNotFound.exception";

@Controller('users')
export class UsersController {

  constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers(){
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/username/:username')
  getByUsername(@Param('username') username: string){
    const user =  this.userService.getUserByUsername(username)
    if(user){
      return new SerializedUser(user)
    }else{
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('/id/:id')
  getUsersById(@Param('id', ParseIntPipe) id: number){
    const user = this.userService.getUserById(id);
    if(user){
      return new SerializedUser(user)
    }else{
      throw new UserNotFoundException()
    }
  }
}
