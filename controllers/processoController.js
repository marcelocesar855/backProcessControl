
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
                {model: Caixa, include : [
                    {model: Setor}
                ]},
                {model: Assunto},
                {model: Setor}
            ]
        })
        .then(data => res.json(data))
    },
    async indexProcessosByParams (req, res) {
        const { setorId, assuntoId, numero } = req.body;
        var setorParams = {model: Caixa, include : [
            {model: Setor}
        ]}
        var assuntoParams = {model: Assunto}
        if (setorId) {
            setorParams = {...setorParams, where: {setorId : setorId}}
        }
        if (assuntoId) {
            assuntoParams = {...assuntoParams, where: {id : assuntoId}}
        }
        var params = {
            include: [
            setorParams,
            assuntoParams,
            {model: Setor}
        ]}
        if (numero != '') {
            params = {...params, where : {
                [Op.or] : [{
                    numero : {
                        [Op.substring] : numero
                    }
                }]
            }}
        }
        await Processo.findAll(params)
        .then(data => res.json(data))

    },
    async count(req, res) {
        await Processo.count()
        .then(rows => {
            res.json(rows)
        })
    }
}