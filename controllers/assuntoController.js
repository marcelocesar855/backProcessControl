
const { Assunto } = require('../sequelize');

module.exports = {
    async store(req, res) {
        await Assunto.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Assunto.findAll()
        .then(datas => res.json(datas))
    },
    async update(req, res) {
        await Assunto.findByPk(req.params.id)
        .then(assunto => {
            assunto.update(req.body)
            res.json(assunto)
        })
    },
    async destroy(req, res) {
        await Assunto.findByPk(req.params.id)
        .then(assunto => {
            assunto.destroy()
            res.json(assunto)
        })
    }
}