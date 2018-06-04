module.exports = (req, res) => {
    res.json({
        msg: 'DELETE request successfully made',
        body: req.body
    });
};