import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Vehicle extends Model {
    public id!: number;
    public name!: string;
    public available!: boolean;
}

Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        tableName: 'vehicles',
    }
);

export default Vehicle;
