const router = require('express').Router();
const {getAds} = require('../controllers/search.controller');

router.get('/search', getAds);

module.exports = router;