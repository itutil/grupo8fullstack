const db = require('../../models');
const Op= db.Sequelize.Op;

module.exports = {
    list: (req,res) => {
        db.Category.findAll()
        .then((categories) => {
            return res.json({
                data: categories,
                total: categories.length
            })
          });
    },
    show: (req,res) => {
        db.Category.findByPk(req.params.id)
        .then((category) => {
            return res.json({
                data: category
            })
          });
    }
} 