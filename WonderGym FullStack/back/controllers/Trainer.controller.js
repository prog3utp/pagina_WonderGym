const trainerModel = require("../models/Trainer.model");

module.exports = class TrainerController {
    static async getAll(req, res) {
        try {
            const trainer = await trainerModel.find();
            res.status(200).json(trainer);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async getByCode(req, res) {
        try {
            const code = req.params.code;
            const trainer = await trainerModel.findOne({ "code": code });
            if (trainer == null) {
                res.status(404).json({ message: "No encontrado en la base de datos" });
            } else {
                res.status(200).json(trainer);
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async create(req, res) {
        try {
            let trainer = req.body;
            if (req.file != undefined) {
                const imageName = req.file.filename;
                trainer.imageUrl = "/" + imageName;
            }
            if (trainer.code == undefined) {
                res.status(400).json({ message: "trainero no puede ser guardado sin codigo" });
            } else {
                if (typeof trainer.categories === 'string') {
                    trainer.categories = JSON.parse(trainer.categories);
                }

                trainer = await trainerModel.create(trainer);
                res.status(201).json(trainer);
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async update(req, res) {
        try {
            const code = req.params.code;
            const trainer = req.body;
            await trainerModel.updateOne({ code: code }, trainer);
            res.status(200).json()
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    static async delete(req, res) {
        try {
            const code = req.params.code;
            await trainerModel.deleteOne({ code: code });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async changeTrainerImage(req, res) {
        try {
            const code = req.params.code;
            const imageName = req.file.filename;
            await trainerModel.updateOne({ "code": code }, { "imageUrl": "/" + imageName });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

}