const controller = {
    index: (req, res) => {
        res.render('contacto');      
        res.redirect('/product');
    },
}; 
    
    

module.exports = controller;