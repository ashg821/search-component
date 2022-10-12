const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    _id: {type: Number, unique: true, required: true},
    name: {type: String, required: true},
    url: {type: String, required: true}
});

module.exports = mongoose.model('companies', companySchema);