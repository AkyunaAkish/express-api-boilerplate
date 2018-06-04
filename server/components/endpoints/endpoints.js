const express = require('express');
const router = express.Router();

const get = require('./controllers/get');
const post = require('./controllers/post');
const put = require('./controllers/put');
const remove = require('./controllers/remove');

router.get('/', get);
router.post('/', post);
router.put('/', put);
router.delete('/', remove);

module.exports = router;