const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maritalStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nationality: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eMail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    levelOfeducation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    statusOfTheStudy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    workAreas: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachCv: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contact',
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
    ]
  });
};
