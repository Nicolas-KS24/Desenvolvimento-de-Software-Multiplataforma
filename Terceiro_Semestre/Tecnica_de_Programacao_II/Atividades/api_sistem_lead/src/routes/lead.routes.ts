import { Router } from "express";
import { LeadController } from "../controllers/lead.controller";

const router = Router();

router.post("/leads", LeadController.create);
router.get("/leads", LeadController.list);
router.get("/leads/:id", LeadController.getById);
router.put("/leads/:id/next", LeadController.nextStage);

export default router;