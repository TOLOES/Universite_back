import { Request, Response } from 'express';
import Vehicle from '../models/vehicle';

export const getVehicles = async (req: Request, res: Response) => {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
};

export const createVehicle = async (req: Request, res: Response) => {
    const { name } = req.body;
    const vehicle = await Vehicle.create({ name });
    res.status(201).json(vehicle);
};

export const updateVehicle = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, available } = req.body;
    const vehicle = await Vehicle.findByPk(id);
    if (vehicle) {
        vehicle.name = name;
        vehicle.available = available;
        await vehicle.save();
        res.json(vehicle);
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
};
