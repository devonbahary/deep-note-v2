require("dotenv").config();
import { MongoClient } from 'mongodb';

const {
    MONGO_DB_NAME,
    MONGO_DB_PASSWORD,
    MONGO_DB_URI,
    MONGO_DB_USER,
} = process.env;

const uri = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_URI}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(
    uri, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
);

mongoClient.connect(err => {
    if (err) throw err;
});
