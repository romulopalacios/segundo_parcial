import { Router } from 'express';
import { PlatoController } from './controller';

export class PlatoRoutes {
  static get routes(): Router {
    const router = Router();
    const platoController = new PlatoController();

    router.get('/', platoController.getPlatos);
    router.get('/:id', platoController.getPlatoById);
    router.post('/', platoController.createPlato);

    return router;
  }
}
