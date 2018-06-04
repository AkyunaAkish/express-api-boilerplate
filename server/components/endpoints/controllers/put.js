module.exports = (req, res) => {
    // checking that the request body was properly provided in the request
    if(req.body && Object.keys(req.body).length) {
        res.json({
            msg: 'PUT request successfully made',
            body: req.body
        });
    } else {
        res.status(400).json({
            msg: 'PUT request failed, no request body provided'
        });
    }
};