import {Router} from 'express';
import authRoutes from './auth';
import vacancyRoutes from './vacancy';
import tipRoutes from './tip';

const rootRouter:Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('', vacancyRoutes)
rootRouter.use('/tip', tipRoutes)

export default rootRouter;