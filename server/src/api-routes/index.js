import { Router } from 'express';

import Products from '../controllers/Products';

const router = new Router();

router.use('/products', Products);

export default router;
