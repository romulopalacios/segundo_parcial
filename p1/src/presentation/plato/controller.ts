import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PlatoController {
    constructor() { }

    public async getPlatos(req: Request, res: Response) {
        const platos = await prisma.plato.findMany();
        return res.json(platos);
    }

    public async getPlatoById(req: Request, res: Response) {
        const { id } = req.params;
        const plato = await prisma.plato.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        res.json(plato);
    }

    public async createPlato(req: Request, res: Response) {
        const { nombre, estado = "Activo" } = req.body;
        const plato = await prisma.plato.create({
            data: {
                nombre,
                estado
            }
        });
        res.json(plato);
    }
}
