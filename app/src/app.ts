import express from 'express';
import sequelize from './config/database';
import setupSwagger from './swagger';
import vehicleRoutes from './routes/vehicle';

const app = express();

app.use(express.json());
setupSwagger(app);

app.use('/api', vehicleRoutes);

app.get('/', (req, res) => {
    res.send('Hello, this is the University Vehicle Reservation API');
});

sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});

export default app;
