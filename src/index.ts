import * as mongoose from "mongoose";
import { BookModel } from "./book.model";

const init = async () => {
    await mongoose.connect('mongodb://localhost/test');
    await BookModel.deleteMany({
        title: {
            $exists: true
        }
    });
    await BookModel.create([
        {
            title: "A Book",
            authors: [
                {
                    firstName: "A",
                    lastName: "B"
                }, 
                {
                    firstName: "C",
                    lastName: "D"
                }
            ]
        },
        {
            title: "B Book",
            authors: [
                {
                    firstName: "D",
                    lastName: "A"
                }, 
                {
                    firstName: "E",
                    lastName: "B"
                }
            ]
        },
        {
            title: "B Book",
            authors: [
                {
                    firstName: "E",
                    lastName: "C"

                }, 
                {
                    firstName: "C",
                    lastName: "D"

                }
            ]
        },
    ])
    const book = await BookModel.find({
        $or: [
            {
                "authors.firstName": "A",
            }, 
            {
                "authors.lastName": "A",
            }
        ],
        title: {
            $exists: true
        }
    });
    console.log(JSON.stringify(book, null, 4));
}

init();
