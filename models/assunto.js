module.exports = (sequelize, type) => {
    return sequelize.define('assunto', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        descricao: type.STRING
    })
} 