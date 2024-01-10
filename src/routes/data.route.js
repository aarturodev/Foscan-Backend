import { Router } from "express";

import {DataController} from "../controllers/data.controller.js";

const router = Router();

router.get("/linea/:troncal/:linea/:corrida", DataController.getData);
router.get("/graficas/:troncal/:linea/:corrida", DataController.getGraficas);



export default router;

