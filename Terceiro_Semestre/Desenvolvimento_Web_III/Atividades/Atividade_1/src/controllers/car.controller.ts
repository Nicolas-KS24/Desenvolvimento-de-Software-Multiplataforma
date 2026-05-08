import {prisma} from '../prisma';
import {Request, Response} from 'express'; //npm i -D express @types/express

// CURD vehicle
export const getCar = async (req: Request, res: Response) => {
    try{
        const cars = await prisma.car.findMany();
        res.json(cars);
    }   catch(error){
        res.status(500).json({error: "Failed to fetch cars"});
    }
};

export const getCarById = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const carId = await prisma.car.findUnique({where: {id: Number(id)}});
        
        if(!carId){
            return res.status(404).json({error: "Car not found"});
        }
        res.json(carId);
    }   catch(error){
        res.status(500).json({error: "Error fetching car"});
    }
};

export const createCar = async (req: Request, res: Response) => {
    try{
        const {model} = req.body;
        if(!model){
            return res.status(400).json({error: "Model required"});
        }
        const newCar = await prisma.car.create({data: {model}});
        res.status(201).json(newCar);
    }   catch(error){
        res.status(500).json({error: "Error creating car"});
    }
};

export const updateCar = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const {model} = req.body;

        const updateCar = await prisma.car.update({where: {id: Number(id)}, data: {model}});
            res.json(updateCar);
    }   catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Car not found"});
        }
        res.status(500).json({error: "Error updating car"});
    }
};

export const deleteCar = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.car.delete({where: {id: Number(id)}});
        res.status(204).send();
    }  catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Car not found"});
        }
        res.status(500).json({error: "Error deleting car"});
    }
};
