const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flowerSchema = new Schema({
    name: {
        type: String,
    },
    image:{
        type: Buffer,
    },
    imageType:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
},{
    timestamps: true,
})

const FlowerModel = mongoose.model('flowers', flowerSchema);

module.exports = FlowerModel;