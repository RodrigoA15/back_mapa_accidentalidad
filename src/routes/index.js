import { Router } from "express";
import damagesRoutes from "./damage.routes.js";

const router = Router();

router.use("/api/v1/damages", damagesRoutes);

export default router;
