import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  userName: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  role: string;
  @Prop()
  profilePic: string;
  @Prop()
  coverPic: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
