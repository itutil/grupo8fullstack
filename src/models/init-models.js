var DataTypes = require("sequelize").DataTypes;
var _cart = require("./cart");
var _productCategory = require("./productCategory");
var _productImages = require("./productImages");
var _products = require("./products");
var _userRole = require("./userRole");
var _users = require("./users");

function initModels(sequelize) {
  var cart = _cart(sequelize, DataTypes);
  var productCategory = _productCategory(sequelize, DataTypes);
  var productImages = _productImages(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var userRole = _userRole(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cart.belongsTo(products, { as: "product", foreignKey: "products_id"});
  products.hasMany(cart, { as: "carts", foreignKey: "products_id"});
  productImages.belongsTo(products, { as: "product", foreignKey: "products_id"});
  products.hasMany(productImages, { as: "productImages", foreignKey: "products_id"});
  users.belongsTo(userRole, { as: "userRole", foreignKey: "userRole_id"});
  userRole.hasMany(users, { as: "users", foreignKey: "userRole_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "users_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "users_id"});

  return {
    cart,
    productCategory,
    productImages,
    products,
    userRole,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
