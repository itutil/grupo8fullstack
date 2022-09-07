module.exports = (sequelize, DataTypes) =>{
    const alias = 'Image';
    const cols ={
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'products',
            key: 'id'
            }
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        blob: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    };
    
    const config = {
        tableName: "productImages"
    };

    const Image = sequelize.define(alias, cols, config);
    return Image

}