require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import "./database/mongo";
import notes from "./routes/notes";

const app = express();

app.use(bodyParser.json());
app.use('/notes', notes);

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));