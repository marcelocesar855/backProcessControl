module.exports = (sequelize, type) => {
    return sequelize.define('dossie', {
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