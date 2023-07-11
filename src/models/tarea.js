import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    tarea:{
        type: String,
        required: true,
    }
})

const Tarea = model('tarea',tareaSchema)

export default Tarea;