const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("*", (req, res) => {
    res.status(200).send({
        message: "Bienvenidos al desarrollo de APIs"
    });
});

const port = parseInt(process.env.PORT, 10) || 3000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});