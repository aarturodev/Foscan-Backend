import { Router } from "express";

import {DataController} from "../controllers/data.controller.js";

const router = Router();

router.get("/linea/:troncal/:linea/:corrida", DataController.getData);



export default router;

