module.exports = (sequelize, type) => {
    return sequelize.define('caixa', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numero: type.STRING,
        armario: type.STRING,
        prateleira: type.STRING
    })
} 