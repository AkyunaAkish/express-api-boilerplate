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

const getWithQueryString = require('./controllers/getWithQueryString');

// the query can be passed in as any data after a question mark /api/endpoints/query?=myquery
router.get('/query', get);

const getWithParam = require('./controllers/getWithParam');

// :param can be passed in as any string value
router.get('/param/:param', get);

module.exports = router;