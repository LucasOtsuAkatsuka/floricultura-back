const express = require("express");
const cors = require("cors");
const rotas = require("./Routes.js");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(rotas);

app.use("*", (req, res) => {
    res.status(404).json({message: `Rota ${req.baseUrl} nao encontrada`})
});

module.exports = app;