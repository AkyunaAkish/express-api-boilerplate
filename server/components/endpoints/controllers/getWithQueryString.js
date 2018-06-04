module.exports = (req, res) => {
    if(req.query && req.query.length) {
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