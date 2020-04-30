module.exports = (sequelize, type) => {
    return sequelize.define('processo', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        numero: type.STRING,
        data: type.DATE,
        volumes: type.INTEGER,
        interessado: type.STRING
    })
} 