require("dotenv").config();
import express from "express";
import "./database/mongo";

const app = express();

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));