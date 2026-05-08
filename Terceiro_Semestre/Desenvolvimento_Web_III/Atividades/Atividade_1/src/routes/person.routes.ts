import express from "express";
import { getPerson, getPersonById, createPerson, updatePerson, deletePerson } from "../controllers/person.controller";

const router = express.Router();

router.get("/", getPerson);
router.get("/:id", getPersonById);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export const personRoutes = router;