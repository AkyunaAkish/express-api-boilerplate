module.exports = (req, res) => {
    // checking that the param was properly provided in the request
    if(req.params && req.params.param && req.params.param.length) {
        res.json({
            msg: 'GET request successfully made',
            param: req.params.param
        });
    } else {
        res.status(400).json({
            msg: 'GET request failed, no param provided'
        });
    }
};