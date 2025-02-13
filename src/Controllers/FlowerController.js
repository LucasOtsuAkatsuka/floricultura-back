const FlowerModel = require('../Models/flower.js');

class FlowerController {

    async create(req, res){
        try {
            const {name, description, price} = req.body;

            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            const newFlower = new FlowerModel({
                name, 
                description, 
                price, 
                image: req.file.buffer,
                imageType: req.file.mimetype,
            });

            await newFlower.save();
            res.status(200).json({message: "Flower created successfully"})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

}

module.exports = new FlowerController();