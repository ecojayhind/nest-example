import { Module } from "@nestjs/common";
import { UsersService } from "./service/users.service";
import { UsersController } from "./controllers/users.controller";
// import { MongooseModule } from "@nestjs/mongoose";
// import { User, UserSchema } from "./models/user.schema";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";

@Module({
  imports: [
     SequelizeModule.forFeature([User]),
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
