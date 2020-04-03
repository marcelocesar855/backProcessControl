
const { Setor } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    },
    async indexSetorByParams (req, res) {
        const { nome, id } = req.body;
        var params = {}
        if (nome != '') {
            params = {where : {
                [Op.or] : [{
                    nome : {
                        [Op.substring] : nome
                    }
                }]
            }}
        }
        if (id) {
            params = {where : {...params.where, id : id}}
        }
        await Setor.findAll(params)
        .then(data => res.json(data))
    }
}