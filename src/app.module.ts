import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes env available app-wide
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    UsersModule,
  ],
})
export class AppModule {}
