import { MongoService } from "./mongo-service";

export class NotesService extends MongoService {
    constructor() {
        super('notes');
    }
}