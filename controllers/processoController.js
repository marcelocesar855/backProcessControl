
const { Processo, Caixa, Assunto, Setor } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async store(req, res) {
        await Processo.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Processo.findAll()
        .then(data => res.json(data))
    },
    async update(req, res) {
        await Processo.findByPk(req.params.id)
        .then(processo => {
            processo.update(req.body)
            res.json(processo)
        })
    },
    async destroy(req, res) {
        await Processo.findByPk(req.params.id)
        .then(processo => {
            processo.destroy()
            res.json(processo)
        })
    },
    async indexProcessosWithData (req, res) {
        await Processo.findAll({
            include: [
                {model: Caixa},
                {model: Assunto}
            ]
        })
        .then(data => res.json(data))
    },
    async indexProcessosByParams (req, res) {
        const { setorId, assuntoId } = req.query;
        var setorParams = {model: Caixa}
        var assuntoParams = {model: Assunto}
        if (setorId) {
            setorParams = {...setorParams, where: {setorId : setorId}}
        }
        if (assuntoId) {
            assuntoParams = {...assuntoParams, where: {id : assuntoId}}
        }
        await Processo.findAll({
            include: [
                setorParams,
                assuntoParams
            ]
        })
        .then(data => res.json(data))
    },
    async indexByNumber (req, res) {
        await Processo.findAll({
            where : {
                [Op.or] : [{
                    numero : {
                        [Op.substring] : req.body.search
                    }
                }]
            }
        })
        .then(data => res.json(data))
    }
}