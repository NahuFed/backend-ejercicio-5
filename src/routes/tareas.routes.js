import { Router } from "express";
import { crearTarea,obtenerTareas, borrarTarea, editarTarea} from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router.route("/tareas/:id").delete(borrarTarea).put(editarTarea);

export default router