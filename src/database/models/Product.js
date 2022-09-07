module.exports = (sequelize, DataTypes) => {
    const alias = 'Product';
    const cols ={
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        productCategory_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tradeMark: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        model: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imagenes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        dateManufactured: {
            type: DataTypes.DATE,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }; 

    const config = {
        tableName: "products"
    };

    const Product = sequelize.define(alias, cols, config);
    return Product
};
