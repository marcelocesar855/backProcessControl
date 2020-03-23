module.exports = (sequelize, type) => {
    return sequelize.define('caixa', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numero: type.STRING,
        estante: type.INTEGER,
        prateleira: type.INTEGER
    })
} 