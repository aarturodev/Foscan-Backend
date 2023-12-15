import { Router } from "express";

import {DataController} from "../controllers/data.controller.js";

const router = Router();

router.get("/linea/:troncal/:linea/:corrida", DataController.getLinea);
router.post('/linea', DataController.getDataPrueba);


export default router;

