const controller = {
    index: (req, res) => {
        res.render('staff');      
        res.redirect('/staff');
    },
}; 
    
    

module.exports = controller;