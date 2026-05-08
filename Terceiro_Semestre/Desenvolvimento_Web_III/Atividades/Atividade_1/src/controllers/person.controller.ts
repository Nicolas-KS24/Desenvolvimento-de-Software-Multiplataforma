import {prisma} from '../prisma';
import { Request, Response } from 'express';

// CRUD person
export const getPerson = async (req: Request, res: Response) => {
    try{
        const persons = await prisma.person.findMany({
            include: {
                phones: true,
                person_Cars: {
                    include: {car: true}
                }
            }
        });
        res.json(persons);
    }   catch(error){
        res.status(500).json({error: "Failed to fetch people"});
    }
};

export const getPersonById = async (req: Request, res: Response) => {
    try{
        const personId = Number(req.params.id);
        if(isNaN(personId)){
            return res.status(400).json({error: "invalid ID"});
        }

        const person = await prisma.person.findUnique({
            where: {id: personId},
            include: {
                phones: true,
                person_Cars: {
                    include: {car: true}
                }
            }
        });

        if(!person){
            return res.status(404).json({error: "Person not found"});
        }
        res.json(person);

        // const {id} = req.params;
        // const personId = await prisma.person.findUnique({
        //     where: {id: Number(id)},
        //     include: {person_Cars: true, phones: true}        
        // });
        
        // if(!personId){
        //     return res.status(404).json({error: "Person not found"});
        // }
        // res.json(personId);
    }   catch(error){
        res.status(500).json({error: "Error fetching person"});
    }
};

export const createPerson = async (req: Request, res: Response) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.status(400).json({error: "Name required"});
        }
        const newPerson = await prisma.person.create({data: {name}});
        res.status(201).json(newPerson);
    }   catch(error){
        res.status(500).json({error: "Error creating person"});
    }
};

export const updatePerson = async (req: Request, res: Response) => {
    try{
        const personId = Number(req.params.id);
        const {name} = req.body;

        if(isNaN(personId)){
            return res.status(400).json({error: "Invalid ID"});
        }
        if(!name || name.trim() === ""){
            return res.status(404).json({error: "Name required"});
        }

        const updatePerson = await prisma.person.update({
            where: {id: personId},
            data: {name}
        });
        res.json(updatePerson);

        // const {id} = req.params;
        // const {name} = req.body;

        // const updatePerson = await prisma.person.update({where: {id: Number(id)}, data: {name}});
        // res.json(updatePerson);
    }   catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Person not found"});
        }
        res.status(500).json({error: "Error updating person"});
    }
};

export const deletePerson = async (req: Request, res: Response) => {
    try{
        const personId = Number(req.params.id);
        await prisma.person.delete({
            where: {id: personId},
        });
        res.status(204).send();


        // const {id} = req.params;
        // await prisma.person.delete({where: {id: Number(id)}});
        // res.status(204).send();
    }  catch(error:any){
        if(error.code === "P2025"){
            return res.status(404).json({error: "Person not found"});
        }
        res.status(500).json({error: "Error deleting person"});
    }
};
