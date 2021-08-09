
const { Dossie } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async store(req, res) {
        await Dossie.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Dossie.findAll()
        .then(datas => res.json(datas))
    },
    async update(req, res) {
        await Dossie.findByPk(req.params.id)
        .then(Dossie => {
            Dossie.update(req.body)
            res.json(Dossie)
        })
    },
    async destroy(req, res) {
        await Dossie.findByPk(req.params.id)
        .then(Dossie => {
            Dossie.destroy()
            res.json(Dossie)
        })
    },
    async indexDossieByParams (req, res) {
        const { numero, armario, prateleira } = req.body;
        var params = {}
        if (numero != '') {
            params = {...params, where : {
                [Op.or] : [{
                numero : {
                    [Op.substring] : numero
                }}]
            }}
        }
        if (armario != '') {
            params = {...params, where : {...params.where, armario : armario}}
        }
        if (prateleira != '') {
            params = {...params, where : {...params.where, prateleira : prateleira}}
        }
        await Dossie.findAll(params)
        .then(data => res.json(data))
    },
    async count(req, res) {
        await Dossie.count()
        .then(rows => {
            res.json(rows)
        })
    }
}