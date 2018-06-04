module.exports = (req, res) => {
    res.json({
        msg: 'PUT request successfully made',
        body: req.body
    });
};