import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(@Inject() private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string){
    this.authService.validateUser(username, password);
  }
}