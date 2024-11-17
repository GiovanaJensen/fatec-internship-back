import {Router} from 'express'
import { addVacancy, deleteVacancy, getAllVacancies, getVacancyById, updateVacancy } from '../controllers/vacancies'

const vacancyRoutes:Router = Router()

vacancyRoutes.post('', addVacancy)
vacancyRoutes.get('/:id', getVacancyById)
vacancyRoutes.get('', getAllVacancies)
vacancyRoutes.put('/:id', updateVacancy)
vacancyRoutes.delete('/:id', deleteVacancy)

export default vacancyRoutes