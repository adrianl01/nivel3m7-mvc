import { sequelize } from "./conn";
import { Model, DataTypes } from "sequelize"
export class Profile extends Model { }
Profile.init(
    {
        name: DataTypes.STRING,
        bio: DataTypes.STRING,
        image: DataTypes.STRING
    },
    { sequelize, modelName: "Profile" }
);