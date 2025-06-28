import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { UsersService } from '../users/users.service';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";

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
  async createUser(user: any) {
    return this.usersService.create(user);
  }
}
