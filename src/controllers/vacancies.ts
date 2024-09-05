import { Request, Response } from "express";
import { prismaClient } from '..';

export const addVacancy = async (req:Request, res:Response) => {
    const { title, logo, company, location, isSaved, description, responsibilities, requirements } = req.body;
    if (!title || !logo || !company || !location || !isSaved || !description || !responsibilities || !requirements){
        return res.status(400).json({ error: `Todos os campos são obrigatórios`});
    }

    let vacancy = await prismaClient.vaga.create({
        data: {
            nm_vaga: title,
            nm_imagemUrl: logo,
            nm_empresa: company,
            ds_logradouro: location,
            ds_vaga: description,
            ds_requisitos: requirements,
            ds_responsabilidades: responsibilities
        }
    })
    res.status(201).json(vacancy);
}

export const getVacancyById = async (req:Request, res:Response) => {
    const { id } = req.params;

    try {
        const vacancy = await prismaClient.vaga.findUnique({
            where: { cd_vaga: Number(id)}
        });

        if(!vacancy){
            return res.status(404).json({ error: 'Vaga não encontrada'});
        }

        res.json(vacancy);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a vaga'});
    }
};

export const getAllVacancies = async (req:Request, res:Response) => {
    try {
        const vacancies = await prismaClient.vaga.findMany();
        res.json(vacancies);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar as vagas"});
    }
}

export const updateVacancy = async (req:Request, res:Response) => {
    const {id} = req.params;
    const {
        title,
        logo,
        company,
        location,
        isSaved,
        description,
        responsibilities,
        requirements
    } = req.body;

    try {
        const existingVacancy = await prismaClient.vaga.findUnique({
            where: { cd_vaga: Number(id)}
        });

        if(!existingVacancy){
            return res.status(404).json({ error: "Vaga não encontrada"});
        }

        const updatedVacancy = await prismaClient.vaga.update({
            where: { cd_vaga: Number(id) },
            data: {
                nm_vaga: title ?? existingVacancy.nm_vaga,
                nm_imagemUrl: logo ?? existingVacancy.nm_imagemUrl,
                nm_empresa: company ?? existingVacancy.nm_empresa,
                ds_logradouro: location ?? existingVacancy.ds_logradouro,
                eh_favorito: isSaved ?? existingVacancy.eh_favorito,
                ds_vaga: description ?? existingVacancy.ds_vaga,
                ds_responsabilidades: responsibilities ?? existingVacancy.ds_responsabilidades,
                ds_requisitos: requirements ?? existingVacancy.ds_requisitos
            }
        });

        res.json(updatedVacancy);
    } catch (error){
        res.status(500).json({ error: 'Erro ao atualizar a vaga' });
    }
}

export const deleteVacancy = async (req:Request, res:Response) => {
    const { id } = req.params;

    try {
        const vacancy = await prismaClient.vaga.delete({
            where: { cd_vaga: Number(id)}
        });

        res.json({ message: "Vaga deletada com sucesso", vacancy});
    } catch (error){
        res.status(500).json({ error: "Erro ao deletar a vaga"})
    }
}