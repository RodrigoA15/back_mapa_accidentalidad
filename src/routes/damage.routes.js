import { Router } from "express";
import { totalDamage } from "../controllers/damage.js";

const router = Router();

router.get("/:fecha_inicio/:fecha_fin/:type", totalDamage);

export default router;
