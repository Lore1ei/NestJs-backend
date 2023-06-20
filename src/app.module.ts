import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import entities from "./typeorm";

@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'nest_postgres',
    entities: entities,
    synchronize: true,
  }), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
