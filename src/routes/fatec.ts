import {Router} from 'express'
import { addFatec, deleteFatec, getAllFatecs, getFatecById, updateFatec } from '../controllers/fatec'

const fatecRoutes:Router = Router()

fatecRoutes.post('', addFatec)
fatecRoutes.get('/:id', getFatecById)
fatecRoutes.get('', getAllFatecs)
fatecRoutes.patch('/:id', updateFatec)
fatecRoutes.delete('/:id', deleteFatec)

export default fatecRoutes