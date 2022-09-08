module.exports = (sequelize, DataTypes) => {
    const alias = 'Category';
    const cols ={
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: true
        },

    }; 

    const config = {
        tableName: "productCategory"
    };

    const Product = sequelize.define(alias, cols, config);
    return Product
};
