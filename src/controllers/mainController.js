const controller = {
    index: (req, res) => {
        res.render('index');
    },
    mainDetail: (req, res) => {
        res.render('menuDetail')
    },
    login: (req, res) => {
        if(!req.body){
            res.redirect('index')
        }
        res.render('productos')
    }   
};

module.exports = controller;