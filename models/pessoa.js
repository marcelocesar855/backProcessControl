module.exports = (sequelize, type) => {
    return sequelize.define('pessoa', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: type.STRING,
          unique:true
        },
        matricula: type.STRING,
        observacao: type.STRING
    })
} 