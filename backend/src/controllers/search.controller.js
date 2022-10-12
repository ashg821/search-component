const catchAsync = require('../utils/catchAsync');
const { searchAds, getUrlById } = require('../services/search.service');

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

const getUrl = catchAsync(async (req, res) => {
    try {
        const { id } = req.params;
        const url = await getUrlById(id);
        res.status(200).send({ url });

    } catch (err) {
        console.log(err);
        const { statusCode, message } = err;
        if (!statusCode) return res.status(500).send({ message: "Internal server Error" });
        res.status(statusCode).send({ statusCode, message })
    }
});

module.exports = { getAds, getUrl };