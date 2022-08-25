const controller = {
    detail: (req, res) => {
        res.render('detalleProducto');
    },//mostrar detalle producto
    buy: (req, res) => {
        res.render('pago');
    },//pago
}

module.exports= controller;//exportamos el controlador