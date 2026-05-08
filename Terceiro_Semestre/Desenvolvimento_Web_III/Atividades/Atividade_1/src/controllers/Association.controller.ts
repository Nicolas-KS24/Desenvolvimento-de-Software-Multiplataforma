import {prisma} from '../prisma';
import { Request, Response } from 'express';

// CRUD Association Person <-> Car
export const createAssociation = async (req: Request, res: Response) => {
    try{
        const {personId, carId} = req.body;
        const association = await prisma.person_Car.create({
            data: {
                person_Id: Number(personId),
                car_Id: Number(carId)
            }
        });
        res.status(201).json({association});
        }   catch(error:any){
            if(error.code === "P2002"){
                return res.status(400).json({error: "Association already exists"});
            }
            res.status(500).json({error: "Error creating association"});
    }
};

export const listAssociation = async (req: Request, res: Response) => {
    try{
        const associations = await prisma.person_Car.findMany({
            include: {person: true, car: true}
        });
        res.json(associations);
    }   catch(error){
        res.status(500).json({error: "Error push associaties"});
    }
};

export const deleteAssociation = async (req: Request, res: Response) => {
    try{
        const {personId, carId} = req.params;
        await prisma.person_Car.delete({where: {person_Id_car_Id: {person_Id: Number(personId), car_Id: Number(carId),},},});
        res.json({message: "Remove association"});
    }   catch(error){
        res.status(500).json({error: "Error removing association"});
    }
};