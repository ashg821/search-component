const router = require('express').Router();
const {getAds, getUrl} = require('../controllers/search.controller');

router.get('/search', getAds);
router.get('/search/:id', getUrl);

module.exports = router;