import { Schema, Document, ObjectId, model } from "mongoose";

const bookSchema = new Schema({
  title:  String,
  authors: [{ firstName: String, lastName: String }],
});

export class Author {
    name: string;
}  

export class Book {
    title: string;
    authors: Author[];
}

export type BookDocument = Book & Document<ObjectId>;

export const BookModel = model<Book>('Book', bookSchema);

