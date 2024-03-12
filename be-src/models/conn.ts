import { Sequelize } from "sequelize"
require('dotenv').config();
const sequelize = new Sequelize(process.env.SEQUELIZE_ACCOUNT_URL);
export { sequelize }
