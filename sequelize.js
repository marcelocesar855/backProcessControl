const Sequelize = require('sequelize')
const CaixaModel = require('./models/caixa')
const ProcessoModel = require('./models/processo')
const SetorModel = require('./models/setor')
const AssuntoModel = require('./models/assunto')
const PessoaModel = require('./models/pessoa')
const DossieModel = require('./models/dossie')

const sequelize = new Sequelize('process_control', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Processo = ProcessoModel(sequelize, Sequelize)
const Caixa = CaixaModel(sequelize, Sequelize)
const Setor = SetorModel(sequelize, Sequelize)
const Assunto = AssuntoModel(sequelize, Sequelize)
const Pessoa = PessoaModel(sequelize, Sequelize)
const Dossie = DossieModel(sequelize, Sequelize)

Caixa.belongsTo(Setor)
Setor.hasMany(Caixa)
Processo.belongsTo(Caixa)
Caixa.hasMany(Processo)
Processo.belongsTo(Assunto)
Assunto.hasMany(Processo)
Processo.belongsTo(Setor)
Pessoa.belongsTo(Dossie)
Dossie.hasMany(Pessoa)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Processo,
  Caixa,
  Setor,
  Assunto,
  Pessoa,
  Dossie
}