const mongoose = require('mongoose');

const adSchema = new mongoose.Schema(
    {
        _id: {type: Number, unique: true, required: true},
        companyId: {type: Number, required: true},
        primaryText: {type: String, required: true, trim: true},
        headline: {type: String, required: true, trim: true},
        description: {type: String, default: "", trim: true},
        CTA: {type: String, required: true, trim: true},
        imageURL: {type: String, required: true, trim: true}
    }
);

module.exports = mongoose.model('ad', adSchema);