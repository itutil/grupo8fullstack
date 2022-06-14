const controller = {
    index: (req, res) => {
        res.render('productos');
    },
    detail: (req,res) => {
        res.render('detalleProducto')
    }
};

module.exports = controller;