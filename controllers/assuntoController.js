
const { Assunto } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    },
    async indexAssuntoByParams (req, res) {
        const { descricao } = req.body;
        if (descricao != '') {
            await Assunto.findAll({
                where : {
                [Op.or] : [{
                    descricao : {
                        [Op.substring] : descricao
                    }
                }]
            }})
            .then(data => res.json(data))
        }else {
            await Assunto.findAll()
            .then(data => res.json(data))
        }
    }
}