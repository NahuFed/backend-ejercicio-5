import { Router } from "express";
import { crearTarea,obtenerTareas, borrarTarea} from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router.route("/tareas/:id").delete(borrarTarea);

export default router