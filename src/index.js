const dotenv = require('dotenv');
const app = require('./App');
const Loaders = require("./Loaders/index.js");

dotenv.config();
Loaders.start();

app.listen(process.env.PORT, () => console.log("servidor rodando"));