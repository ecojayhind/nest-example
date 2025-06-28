import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true }) // optional: adds createdAt, updatedAt
export class Product {
  @Prop({ required: true, unique: true }) // In MongoDB, _id is default, but you can also index custom ids
  id: number;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  desc: string;

  @Prop({ required: true, type: Number })
  quantity: number;

  @Prop({ required: true, type: Number })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
