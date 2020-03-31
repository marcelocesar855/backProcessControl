
const { Caixa, Setor } = require('../sequelize');

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
        const {setorId} = req.query
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
    }
}