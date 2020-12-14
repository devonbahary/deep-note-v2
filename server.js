require("dotenv").config();
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import "./database/mongo-client";
import notes from "./routes/notes";

const app = express();

app.use(bodyParser.json());
app.use('/notes', notes);

if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.resolve(__dirname, 'client')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
    });
}

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));