import { Module } from "@nestjs/common";
import { UsersService } from "./service/users.service";
import { UsersController } from "./controllers/users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
