
const { Dossie } = require('../sequelize');

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
            params = {...params, where : {numero : numero}}
        }
        if (armario != '') {
            params = {...params, where : {...params.where, armario : armario}}
        }
        if (prateleira != '') {
            params = {...params, where : {...params.where, prateleira : prateleira}}
        }
        await Dossie.findAll(params)
        .then(data => res.json(data))
    }
}