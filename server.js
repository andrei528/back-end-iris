import 'dotenv/config';
import express from "express";
import formData from "express-form-data";
import routes from "./src/routes/routes.js"
import cors from "cors";

const corsOption = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionSuccessStatus: 200
}

const app = express();

app.use(express.json());
app.use(formData.format());
app.use(cors(corsOption));

app.use("/formulario", routes)

app.listen(3000, () => {
    console.log("Servidor escutando...");
});