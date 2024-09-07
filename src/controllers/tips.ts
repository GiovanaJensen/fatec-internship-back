import { Request, Response } from "express";
import { prismaClient } from "..";

export const addTip = async (req: Request, res: Response) => {
    const { name, imageUrl, writer} = req.body;
    if (!name || !imageUrl || !writer){
        return res.status(400).json({ error: `Todos os campos são obrigatórios`})
    }

    let tip = await prismaClient.dica.create({
        data: {
            nm_dica: name,
            nm_imagemUrl: imageUrl,
            nm_autor: writer
        }
    })
    res.status(201).json(tip);
}

export const getTipById = async (req:Request, res:Response) => {
    const {id} = req.params;

    try {
        const tip = await prismaClient.dica.findUnique({
            where: {cd_dica: Number(id)}
        });

        if(!tip){
            return res.status(404).json({error: "Dica não encontrada"});
        }

        res.json(tip);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar a dica'})
    }
};

export const getAllTips = async (req:Request, res:Response) => {
    try {
        const tips = await prismaClient.dica.findMany();
        res.json(tips);
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar as dicas"});
    }
}

export const updateTip = async (req:Request, res:Response) => {
    const {id} = req.params;
    const {
        name,
        imageUrl,
        writer
    } = req.body;

    try {
        const existingTip = await prismaClient.dica.findUnique({
            where: { cd_dica: Number(id)}
        });

        if(!existingTip){
            return res.status(404).json({error: "Dica não encontrada"});
        }

        const updatedTip = await prismaClient.dica.update({
            where: {cd_dica: Number(id)},
            data: {
                nm_dica: name ?? existingTip.nm_dica,
                nm_imagemUrl: imageUrl ?? existingTip.nm_imagemUrl,
                nm_autor: writer ?? existingTip.nm_autor
            }
        });

        res.json(updatedTip);
    } catch (error){
        res.status(500).json({ error: 'Erro ao atualizar a vaga'});
    }
}

export const deleteTip = async (req:Request, res:Response) => {
    const {id} = req.params;

    try {
        const tip = await prismaClient.dica.delete({
            where: { cd_dica: Number(id)}
        });

        res.json({message: "Dica deletada com sucesso", tip});
    } catch (error){
        res.status(500).json({error: "Erro ao deletar a vaga"})
    }
}