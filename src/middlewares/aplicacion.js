const db = require("../database/models/index");
const Op= db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Product.findAll()
        .then((data) => {
            return res.json(data)
          });
    }
} 