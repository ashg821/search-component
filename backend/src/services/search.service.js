const apiError = require('../utils/ApiError');
const Ad = require('../models/ads.model');
const Company = require('../models/company.model');


const searchAds = async (string) => {
    let filteredAds = [];
    if (!string) {
        filteredAds = await Ad.find({});
    }
    else {
        string = string.trim();
        const stringRegex = new RegExp(string, 'gi');
        const companyArray = await Company.find({ name: { $regex: stringRegex } });
        const companyIdArray = companyArray.map(ele => ele._id);
        filteredAds = await Ad.find({ $or: [{ primaryText: { $regex: stringRegex } }, { headline: { $regex: stringRegex } }, { description: { $regex: stringRegex } }, { companyId: { $in: companyIdArray } }] });

    }
    return filteredAds;
}

const getUrlById = async (id) => {
    const {url} = await Company.findById(id);
    return url;
}

module.exports = { searchAds, getUrlById }