import {Router} from 'express';
import authRoutes from './auth';
import vacancyRoutes from './vacancy';

const rootRouter:Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('', vacancyRoutes)

export default rootRouter;