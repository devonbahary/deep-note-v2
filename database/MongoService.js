import { ObjectId } from "mongodb";
import {client} from "./mongo";

export class MongoService {
    constructor(collectionName) {
        this.collection = client.db(process.env.MONGO_DB_NAME).collection(collectionName);
    }

    find(queryFilter = {}) {
        return this.collection.find(queryFilter).toArray();
    }

    findById(id) {
        return this.collection.findOne({ _id: ObjectId(id) });
    }

    async insertOne(document) {
        const result = await this.collection.insertOne(document);
        return result.insertedId;
    }

    updateById(id, updatedDocument) {
        const filter = { _id: ObjectId(id) };
        return this.collection.updateOne(filter, { $set: updatedDocument });
    }

    deleteById(id) {
        const filter = { _id: ObjectId(id) };
        return this.collection.deleteOne(filter);
    }
}