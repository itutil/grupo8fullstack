const controller = {
    index: (req, res) => {
        res.render('preguntasFrecuentes');      
        res.redirect('/preguntasFrecuentes');
    },
}; 
    
    

module.exports = controller;