const catchAsync = require('../utils/catchAsync');
const { searchAds, getCompanyById } = require('../services/search.service');

const getAds = catchAsync(async (req, res) => {
    try {
        const { search } = req.query;
        const filteredAds = await searchAds(search);
        res.status(200).send(filteredAds);

    } catch (err) {
        console.log(err);
        const { statusCode, message } = err;
        if (!statusCode) return res.status(500).send({ message: "Internal server Error" });
        res.status(statusCode).send({ statusCode, message })
    }
});

const getCompany = catchAsync(async (req, res) => {
    try {
        const { id } = req.params;
        const company = await getCompanyById(id);
        res.status(200).send(company);

    } catch (err) {
        console.log(err);
        const { statusCode, message } = err;
        if (!statusCode) return res.status(500).send({ message: "Internal server Error" });
        res.status(statusCode).send({ statusCode, message })
    }
});

module.exports = { getAds, getCompany };