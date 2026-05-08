import { prisma } from "../prisma";
import { Request, Response } from "express";

// CRUD number phone
export const getNumber = async (req: Request, res: Response) => {
    try{
        const numbers = await prisma.number_Phone.findMany({include: {owner: true}});
        res.json(numbers);
    }   catch(error){
        res.status(500).json({error: "Failed to fetch phones"});
    }
};

export const createNumber = async (req: Request, res: Response) => {
    try{
        const {number, personId} = req.body;
        if(!number || !personId){
            return res.status(400).json({error: "Number and Owner required"});
        }
        const newNumber = await prisma.number_Phone.create({data: {number, person_id: Number(personId)}});
        res.status(201).json(newNumber);
    }   catch(error){
        res.status(500).json({error: "Error creating number phone"});
    }
};

export const updateNumber = async (req:Request, res: Response) => {
    try{
        const {id} = req.params;
        const {number} = req.body;

        const updateNumber = await prisma.number_Phone.update({where: {id: Number(id)}, data: {number}});
        res.json(updateNumber);
    }   catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Number phone not found"});
        }
        res.status(500).json({error: "Error updating number phone"});
    }
};

export const deleteNumber = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.number_Phone.delete({where: {id: Number(id)}});
        res.status(204).send();
    }   catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Number phone not found"});
        }
        res.status(500).json({error: "Error deleting number phone"});
    }
};

