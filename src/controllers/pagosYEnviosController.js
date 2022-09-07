const controller = {
    index: (req, res) => {
        res.render('pagosYEnvios');      
        res.redirect('/pagosYEnvios');
    },
}; 
    
    

module.exports = controller;