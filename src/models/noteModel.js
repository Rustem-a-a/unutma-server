import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    items: [{
        itemTitle: {type: String, required: true},
        checked: {type: Boolean, default: false}
    }],
    author: {
        type: String,
        required: true,
    },
})

const Note = mongoose.model('Note', NoteSchema);
export default Note;