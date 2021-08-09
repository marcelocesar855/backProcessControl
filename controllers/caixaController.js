
const { Caixa, Setor } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async store(req, res) {
        await Caixa.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Caixa.findAll()
        .then(datas => res.json(datas))
    },
    async update(req, res) {
        await Caixa.findByPk(req.params.id)
        .then(caixa => {
            caixa.update(req.body)
            res.json(caixa)
        })
    },
    async destroy(req, res) {
        await Caixa.findByPk(req.params.id)
        .then(caixa => {
            caixa.destroy()
            res.json(caixa)
        })
    },
    async indexBySetor (req, res) {
        const {setorId} = req.body
        await Caixa.findAll({
            where : {setorId : setorId}
        })
        .then(datas => res.json(datas))
    },
    async indexWithData (req, res) {
        await Caixa.findAll({
            include : [{
                model : Setor
            }]
        })
        .then(datas => res.json(datas))
    },
    async indexCaixaByParams (req, res) {
        const { numero, armario, prateleira, setorId } = req.body;
        var params = {include : [
            {model: Setor}
        ]}
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
        if (setorId) {
            params = {...params, where : {...params.where, setorId : setorId}}
        }
        await Caixa.findAll(params)
        .then(data => res.json(data))
    },
    async count(req, res) {
        await Caixa.count()
        .then(rows => {
            res.json(rows)
        })
    }
}