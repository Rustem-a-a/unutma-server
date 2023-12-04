import Router from "express";
import NoteController from "../controllers/noteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = new Router()

router.post('/create/note', authMiddleware, NoteController.createNote)
router.patch('/update/item', authMiddleware, NoteController.updateItem)
router.delete('/delete/:noteId', authMiddleware, NoteController.deleteNote);
router.post('/create/item', authMiddleware, NoteController.createItem)
router.get('/get/note', authMiddleware, NoteController.getNote)
router.delete('/delete/:noteId/:itemId', authMiddleware, NoteController.deleteItem);

export default router