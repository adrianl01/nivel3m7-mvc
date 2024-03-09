import { sequelize } from "./models/conn"
sequelize.sync({ force: true }).then(e => {
    console.log("listo")
})