import { Request, Response } from "express";
import { prismaClient } from "..";

export const addFatec = async (req:Request, res:Response) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({error: `O campo nome é obrigatório`})
    }

    let fatec = await prismaClient.unidadeFatec.create({
        data: {
            nm_unidadeFatec: name
        }
    })
    res.status(201).json(fatec);
}

export const getFatecById = async (req:Request, res:Response) => {
    const {id} = req.params;

    try{
        const fatec = await prismaClient.unidadeFatec.findUnique({
            where: {cd_unidadeFatec: Number(id)}
        });

        if(!fatec){
            return res.status(404).json({error: "Fatec não encontrada"});
        }

        res.json(fatec);
    } catch (error){
        res.status(500).json({error: 'Erro ao buscar a Fatec'})
    }
};

export const getAllFatecs = async (req:Request, res:Response) => {
    try {
        const fatecs = await prismaClient.unidadeFatec.findMany();
        res.json(fatecs);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar as fatecs"})
    }
}

export const updateFatec = async (req:Request, res:Response) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const existingFatec = await prismaClient.unidadeFatec.findUnique({
            where: {cd_unidadeFatec: Number(id)}
        });

        if(!existingFatec){
            return res.status(404).json({error: "Fatec não encontrada"});
        }

        const updatedFatec = await prismaClient.unidadeFatec.update({
            where: {cd_unidadeFatec: Number(id)},
            data: {
                nm_unidadeFatec: name ?? existingFatec.nm_unidadeFatec
            }
        });
        res.json(updatedFatec);
    } catch (error){
        res.status(500).json({ error: "Erro ao atualizar a fatec"});
    }
}

export const deleteFatec = async (req:Request, res:Response) => {
    const {id} = req.params;

    try{
        const fatec = await prismaClient.unidadeFatec.delete({
            where: {cd_unidadeFatec: Number(id)}
        });

        res.json({message: "Fatec deletada com sucesso", fatec});
    } catch(error) {
        res.status(500).json({erro: "Erro ao deletar a fatec"})
    }
}