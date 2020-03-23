
const { Setor, Processo } = require('../sequelize');

module.exports = {
    async store(req, res) {
        await Setor.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Setor.findAll()
        .then(datas => res.json(datas))
    },
    async update(req, res) {
        await Setor.findByPk(req.params.id)
        .then(setor => {
            setor.update(req.body)
            res.json(setor)
        })
    },
    async destroy(req, res) {
        await Setor.findByPk(req.params.id)
        .then(setor => {
            setor.destroy()
            res.json(setor)
        })
    }
}