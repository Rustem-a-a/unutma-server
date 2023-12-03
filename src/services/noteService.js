import Note from "../models/noteModel.js";

class NoteService {
    async createNote({title, author}) {
        await Note.create({title, author})
        return note
    }
    async createItem({noteId, itemTitle}) {
        const note = await Note.findOneAndUpdate(
            {_id: noteId},
            {$push: {items: {itemTitle}}},
            {new: true})
        return note
    }
    async updateItem({noteId, newItems}) {
        const note = await Note.findOneAndUpdate(
            {_id: noteId},
            {$set: {items: newItems}},
            {new: true})
        return note
    }
    async deleteItem({noteId, itemId}) {
        const note = await Note.findOneAndUpdate(
            {_id: noteId},
            {$pull: {items: {_id: itemId}}},
            {new: true})
        return note
    }
    async getNote(userId) {
        const note = await Note.find({author: userId})
        return note
    }
}

export default new NoteService()