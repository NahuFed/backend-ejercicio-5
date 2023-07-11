import { Router } from "express";
import { crearTarea,obtenerTareas, borrarTarea, editarTarea} from "../controllers/tareas.controllers";
import { validarTarea } from "../helpers/validarTarea";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(validarTarea, crearTarea);
router.route("/tareas/:id").delete(borrarTarea).put(validarTarea, editarTarea);

export default router