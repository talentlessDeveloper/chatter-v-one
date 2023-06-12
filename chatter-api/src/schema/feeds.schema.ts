import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
import { Comment } from './comment.schema';

@Schema({
  timestamps: true,
})
export class Feeds extends Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  author: any;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop({ type: [String], default: [] })
  likes: string[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Comment.name,
    default: [],
  })
  comments: any;
}

export const FeedsSchema = SchemaFactory.createForClass(Feeds);
