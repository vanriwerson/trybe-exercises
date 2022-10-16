import { Router } from 'express';
import plantsController from '../controllers/plantsController'

const router = Router();

router.get('/', plantsController.getPlants);

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantById(id);

  if (!plant) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(200).json(plant);
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteSucess = await plantsModule.removePlantById(id);

  if (!deleteSucess) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(204).end();
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;

  const plant = await plantsModule.editPlant(id, newPlant);
  res.status(200).json(plant);
});

router.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;

  const plant = await plantsModule.savePlant(newPlant);
  res.status(201).json(plant);
});

export default router;
