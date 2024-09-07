import {Router} from 'express'
import { addTip, deleteTip, getAllTips, getTipById, updateTip } from '../controllers/tips'

const tipRoutes:Router = Router()

tipRoutes.post('', addTip)
tipRoutes.get('/:id', getTipById)
tipRoutes.get('', getAllTips)
tipRoutes.patch('/:id', updateTip)
tipRoutes.delete('/:id', deleteTip)

export default tipRoutes