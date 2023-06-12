import { Controller, Get, Param, ParseIntPipe, Req, Res } from "@nestjs/common";
import { CustomersService } from "../../services/customers/customers.service";
import { Request, Response } from "express";

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  //ParseIntPipe transform string to number

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response){
    console.log(typeof id)
    // return this.customersService.findCustomerById(id)
  }
}
