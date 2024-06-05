import { Router } from 'express';
import { PlatoRoutes } from './plato/route';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/platos', PlatoRoutes.routes);
    return router;
  }
}
