import { Request, Response } from 'express';
import plantsService from '../services/plantsService';

const getPlants = async (req: Request, res: Response) => {
  const plants = await plantsService.getPlants();
  return res.status(200).json(plants);
}

export {
  getPlants,
};
