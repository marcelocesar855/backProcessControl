module.exports = (sequelize, type) => {
    return sequelize.define('caixa', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numero: {
          type: type.STRING,
          unique:true
        },
        armario: type.STRING,
        prateleira: type.STRING
    })
} 