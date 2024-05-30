import { Router } from 'express';
import { getVehicles, createVehicle, updateVehicle } from '../controllers/vehicleController';

const router = Router();

router.get('/vehicles', getVehicles);
router.post('/vehicles', createVehicle);
router.put('/vehicles/:id', updateVehicle);

export default router;
