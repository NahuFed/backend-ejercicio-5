import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

export const  validarTarea =     [
    check("nombreReceta")
      .notEmpty()
      .withMessage("El nombre de la tarea es obligatorio")
      .isLength({min:2,max:100})
      .withMessage("El nombre la tarea debe contener entre 2 y 100 caracteres"),    
    (req,res,next)=>{resultadoValidacion(req,res,next)}
  ]