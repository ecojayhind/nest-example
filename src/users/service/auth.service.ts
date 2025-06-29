import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  // create user
  async createUser(user: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(user.password, salt);
    return await this.usersService.create({ ...user, password: hashedPass });
  }
}
