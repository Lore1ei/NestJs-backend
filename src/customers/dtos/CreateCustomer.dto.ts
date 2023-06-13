import { IsEmail, IsNotEmpty, IsNumberString, } from "class-validator";

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;
}