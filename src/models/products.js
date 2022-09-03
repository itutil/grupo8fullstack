const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productCategory_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tradeMark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    model: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateManufactured: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stock: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "ix_products_id",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
