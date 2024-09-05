import {Router} from 'express'
import { addVacancy, deleteVacancy, getAllVacancies, getVacancyById, updateVacancy } from '../controllers/vacancies'

const vacancyRoutes:Router = Router()

vacancyRoutes.post('/vacancy', addVacancy)
vacancyRoutes.get('/vacancy/:id', getVacancyById)
vacancyRoutes.get('/vacancy', getAllVacancies)
vacancyRoutes.patch('/vacancy/:id', updateVacancy)
vacancyRoutes.delete('/vacancy/:id', deleteVacancy)

export default vacancyRoutes