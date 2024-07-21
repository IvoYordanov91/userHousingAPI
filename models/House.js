const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: String,
    street: String,
    country: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Otros campos necesarios
});

module.exports = mongoose.model('House', HouseSchema);
