import express from "express";
import { createProfile, getProfiles } from "./controllers/user-controller";
import { error } from "console";
import cors from "cors"
import path from "path";
require('dotenv').config()
const port = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json())


// import { sequelize } from "./models/conn"
// sequelize.sync({ force: true }).then(e => {
//     console.log("listo")
// })

app.post("/profile", async (req, res) => {
    console.log(req.body)
    console.log("profile endpoint")

    if (!req.body) { throw error("No data in req.body") }
    const newProfile = await createProfile(req.body)
    console.log("newProfile", newProfile)
    res.json(newProfile)
})


app.get("/profiles", async (req, res) => {
    const allProfiles = await getProfiles()
    res.json(allProfiles)
})

const pathDist = path.resolve(__dirname + "/../dist")
app.get("*", express.static(pathDist))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})