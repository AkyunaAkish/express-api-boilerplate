module.exports = (req, res) => {
    // checking that the query was properly provided in the request
    if(req.query && Object.keys(req.query).length) {
        res.json({
            msg: 'GET request successfully made',
            queryString: req.query
        });
    } else {
        res.status(400).json({
            msg: 'GET request failed, no query string provided'
        });
    }
};