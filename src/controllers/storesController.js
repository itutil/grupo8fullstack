const controller = {
    index: (req, res) => {
        res.render('stores');      
        res.redirect('/stores');
    },
}; 
    
    

module.exports = controller;