const controller = {
    index: (req, res) => {
        res.render('pagosYEnviosTuPedido');      
        res.redirect('/pagosYEnviosTuPedido');
    },
}; 
    
    

module.exports = controller;