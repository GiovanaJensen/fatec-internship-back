import {Request, Response} from 'express'
import { prismaClient } from '..';
import {hashSync, compareSync} from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';

export const signup = async (req:Request, res:Response) => {
   const {email, password, name, ra, course, preferences} = req.body;

   if(!email || !password || !name || !ra || !course || !preferences) {
    return res.status(400).json({ error: `Todos os campos são obrigatórios`});
   }

   let student = await prismaClient.estudante.findFirst({where: {nm_email: email}})
   if(student){
    return res.status(400).json({ error: 'Usuário já existe'});
   }

   const hashedPassword = hashSync(password, 10);
   student = await prismaClient.estudante.create({
    data: {
        nm_estudante: name,
        nm_email: email,
        cd_senha: hashedPassword,
        cd_ra: ra,
        nm_curso: course,
        ds_preferencias: preferences
    }
   })
   res.status(201).json(student);
}

export const login = async (req: Request, res:Response) => {
    const {email, password} = req.body;

    let student = await prismaClient.estudante.findFirst({where: {nm_email: email}})
    if(!student){
        return res.status(404).json({error: "Email ou senha inválidos"})
    }

    if(!compareSync(password, student.cd_senha)){
        return res.status(404).json({error: "Email ou senha inválidos"})
    }

    const token = jwt.sign({
        studentId: student.cd_estudante
    }, JWT_SECRET)

    res.status(200).json({student, token})
}