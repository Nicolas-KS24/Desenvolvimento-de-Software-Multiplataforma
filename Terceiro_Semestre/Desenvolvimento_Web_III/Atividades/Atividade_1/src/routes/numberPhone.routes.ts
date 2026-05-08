import express from 'express';
import { getNumber, createNumber, updateNumber, deleteNumber } from '../controllers/numberPhone.controller';

const router = express.Router();

router.get("/", getNumber);
router.post("/", createNumber);
router.put("/:id", updateNumber);
router.delete("/:id", deleteNumber);

export const numberRoutes = router;