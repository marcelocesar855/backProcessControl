module.exports = (sequelize, type) => {
    return sequelize.define('dossie', {
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