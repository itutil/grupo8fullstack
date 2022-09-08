function adminProductMiddleware(req,res,next){
    if (req.session.inSession.user.Role_id = 1){
        res.redirect('/products/banned')
    }
        next();
}
module.exports = adminProductMiddleware;