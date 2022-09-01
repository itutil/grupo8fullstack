const controller = {
    index: (req, res) => {
        res.render('contacto');      
        res.redirect('/contacto');
    },
}; 
    
    

module.exports = controller;