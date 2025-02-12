const mongoose = require('mongoose');

async function startdb() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("banco de dados iniciado");
}

module.exports = startdb;