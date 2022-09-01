const controller = {
    index: (req, res) => {
        res.render('terminosYCondiciones');      
        res.redirect('/terminosYCondiciones');
    },
}; 
    
    

module.exports = controller;