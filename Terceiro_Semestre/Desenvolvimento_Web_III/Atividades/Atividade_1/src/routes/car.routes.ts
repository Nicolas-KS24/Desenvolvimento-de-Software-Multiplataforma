import express from 'express';
import { getCar, getCarById, createCar, updateCar, deleteCar } from "../controllers/car.controller";

const router = express.Router();

router.get("/", getCar);
router.get("/:id", getCarById);
router.post("/", createCar);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);

export const carRoutes = router;