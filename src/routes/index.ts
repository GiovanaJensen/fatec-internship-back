import {Router} from 'express';
import authRoutes from './auth';
import vacancyRoutes from './vacancy';
import tipRoutes from './tip';
import fatecRoutes from './fatec';

const rootRouter:Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/vacancy', vacancyRoutes)
rootRouter.use('/tips', tipRoutes)
rootRouter.use('/fatec', fatecRoutes)

export default rootRouter;