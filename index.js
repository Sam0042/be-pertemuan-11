import express, { json } from "express";
import router from "./routes/api.js";

const app = express();
const port = 9000;

app.use(express.json());
app.use(express.urlencoded());

app.use(router)

app.listen(port,() =>{
    console.log(`Server running at https://localhost:${port}`)
});