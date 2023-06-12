import { Document } from 'mongoose';
import { User } from './user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  author: any;

  @Prop()
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
