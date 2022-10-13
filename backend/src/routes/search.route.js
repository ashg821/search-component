const router = require('express').Router();
const {getAds, getCompany} = require('../controllers/search.controller');

router.get('/search', getAds);
router.get('/search/:id', getCompany);

module.exports = router;