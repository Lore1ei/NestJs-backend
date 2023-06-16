import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CustomersController } from "./controllers/customers/customers.controller";
import { CustomersService } from "./services/customers/customers.service";
import { ValidateCustomerMiddleware } from "./middlewares/validate-customer.middleware";
import { ValidateCustomerAccountMiddleware } from "./middlewares/validate-customer-account.middleware";
import { NextFunction, Request, Response } from "express";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware,
      (req: Request, res: Response, next: NextFunction) =>{
        console.log("Last Middleware");
        next()
    })
      .forRoutes(CustomersController)
  }
}
