module.exports = (sequelize, type) => {
    return sequelize.define('setor', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        sigla: type.STRING,
        nome: type.STRING
    })
} 