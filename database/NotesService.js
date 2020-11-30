import { MongoService } from "./MongoService";

export class NotesService extends MongoService {
    constructor() {
        super('notes');
    }
}