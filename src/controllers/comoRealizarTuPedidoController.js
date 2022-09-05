const controller = {
    index: (req, res) => {
        res.render('comoRealizarTuPedido');      
        res.redirect('/comoRealizarTuPedido');
    },
}; 
    
    

module.exports = controller;