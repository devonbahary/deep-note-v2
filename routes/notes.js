import express from "express";
import { NotesService } from "../database/notes-service";

const router = express.Router();

router.get('/', async (req, res) => {
    const notesService = new NotesService();
    const notes = await notesService.find();
    res.send(notes);
});

router.get('/:id', async (req, res) => {
    const notesService = new NotesService();
    const notes = await notesService.findById(req.params.id);
    res.send(notes);
});

router.post('/', async (req, res) => {
    const notesService = new NotesService();
    const insertedId = await notesService.insertOne(req.body);
    res.send(insertedId);
});

router.put('/:id', async (req, res) => {
    const notesService = new NotesService();
    await notesService.updateById(req.params.id, req.body);
    res.send(200);
});

router.delete('/:id', async (req, res) => {
    const notesService = new NotesService();
    await notesService.deleteById(req.params.id);
    res.send(200);
});

export default router;