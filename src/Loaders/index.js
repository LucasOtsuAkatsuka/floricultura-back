const startdb = require('./mongodb.js');

class Loaders{
    start(){
        startdb();
    }
}

module.exports = new Loaders();