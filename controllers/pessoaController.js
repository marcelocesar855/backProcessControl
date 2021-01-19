
const { Pessoa, Dossie } = require('../sequelize');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async store(req, res) {
        await Pessoa.create(req.body)
        .then(data => res.json(data))
    },
    async index (req, res) {
        await Pessoa.findAll()
        .then(datas => res.json(datas))
    },
    async update(req, res) {
        await Pessoa.findByPk(req.params.id)
        .then(Pessoa => {
            Pessoa.update(req.body)
            res.json(Pessoa)
        })
    },
    async destroy(req, res) {
        await Pessoa.findByPk(req.params.id)
        .then(Pessoa => {
            Pessoa.destroy()
            res.json(Pessoa)
        })
    },
    async indexPessoaWithData (req, res) {
        await Pessoa.findAll({
            include: [
                {model: Dossie}
            ]
        })
        .then(data => res.json(data))
    },
    async indexPessoaByParams (req, res) {
        const { nome, matricula, dossieId } = req.body;
        var params = {include : [
            {model: Dossie}
        ]}
        if (dossieId) {
            params = {...params, where: {dossieId : dossieId}}
        }
        if (nome != '') {
            params = {...params, 
                where : {...params.where,
                [Op.or] : [{
                    nome : {
                        [Op.substring] : nome
                    }
                }]
            }}
        }
        if (matricula != '') {
            params = {...params,
                where : {...params.where,
                [Op.or] : [{
                    matricula : {
                        [Op.substring] : matricula
                    }
                }]
            }}
        }
        await Pessoa.findAll(params)
        .then(data => res.json(data))
    }
}