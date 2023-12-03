import NoteService from "../services/noteService.js";

class NoteController{
    async createNote(req,res,next){
        try{
            const {title,user} = req.body
            const note = await NoteService.createNote({title,author:user.id})
            console.log(note)
            return res.status(201).json(note)
        }catch (e) {
            next(e)
        }
    }
    async createItem(req,res,next){
        try{
            const note = await NoteService.createItem(req.body)
            console.log(note)
            return res.status(201).json(note)
        }catch (e) {
            next(e)
        }
    }
    async updateItem(req,res,next){
        try{
            const note = await NoteService.updateItem(req.body)
            return res.status(201).json(note)
        }catch (e) {
            next(e)
        }
    }
    async deleteItem(req,res,next){
        try{
            const{noteId,itemId} = req.params
            const note = await NoteService.deleteItem({noteId,itemId})
            console.log(note)
            return res.status(200).json(note)
        }catch (e) {
            next(e)
        }
    }
    async getNote(req,res,next){
        try{
            const{user} = req.body
            const note = await NoteService.getNote(user.id)
            return res.status(200).json(note)
        }catch (e) {
            next(e)
        }
    }
}

export default new NoteController()