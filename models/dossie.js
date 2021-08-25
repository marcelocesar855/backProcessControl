module.exports = (sequelize, type) => {
    return sequelize.define('dossie', {
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