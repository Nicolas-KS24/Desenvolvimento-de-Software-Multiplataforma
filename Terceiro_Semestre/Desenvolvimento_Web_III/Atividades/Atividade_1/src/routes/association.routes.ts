import express from 'express';
import { createAssociation, listAssociation, deleteAssociation } from '../controllers/Association.controller';

const router = express.Router();

router.get("/", listAssociation);
router.post("/", createAssociation);
router.delete("/:personId/:carId", deleteAssociation);

export const associationRoutes = router;