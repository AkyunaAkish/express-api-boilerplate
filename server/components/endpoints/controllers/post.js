module.exports = (req, res) => {
    res.json({
        msg: 'POST request successfully made',
        body: req.body
    });
};