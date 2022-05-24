const controller = {
    index: (req, res) => {
        res.render('index');
    },
    mainDetail: (req, res) => {
        res.render('menuDetail')
    }
};

module.exports = controller;