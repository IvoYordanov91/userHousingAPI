const House = require('../models/House');

// Obtener todas las viviendas de un usuario
exports.getAllHouses = async (req, res) => {
    try {
        const houses = await House.find({ userId: req.params.userId });
        res.status(200).json(houses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener todas las viviendas de un usuario con filtros opcionales
exports.getHousesWithFilters = async (req, res) => {
    try {
        const filters = { userId: req.params.userId };
        if (req.query.city) filters.city = req.query.city;
        if (req.query.street) filters.street = req.query.street;
        if (req.query.country) filters.country = req.query.country;
        const houses = await House.find(filters);
        res.status(200).json(houses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear una nueva vivienda
exports.createHouse = async (req, res) => {
    const house = new House({ ...req.body, userId: req.params.userId });
    try {
        const newHouse = await house.save();
        res.status(201).json(newHouse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar una vivienda
exports.updateHouse = async (req, res) => {
    try {
        const house = await House.findByIdAndUpdate(req.params.houseId, req.body, { new: true });
        if (!house) return res.status(404).json({ message: 'Vivienda no encontrada' });
        res.status(200).json(house);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una vivienda
exports.deleteHouse = async (req, res) => {
    try {
        await House.findByIdAndDelete(req.params.houseId);
        res.status(200).json({ message: 'Vivienda eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
