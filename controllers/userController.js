const User = require('../models/User');
const House = require('../models/House');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un único usuario
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar un usuario parcialmente
exports.updateUserPartially = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Actualizar un usuario por completo
exports.updateUserCompletely = async (req, res) => {
    try {
        const user = await User.findByIdAndReplace(req.params.userId, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    try {
        const houses = await House.find({ userId: req.params.userId });
        if (houses.length > 0) {
            return res.status(400).json({ message: 'El usuario tiene viviendas asociadas' });
        }
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
