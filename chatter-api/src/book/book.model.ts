import * as mongoose from 'mongoose';
export const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

export interface Book {
  id?: string;
  title: string;
  price: number;
  description: string;
}
