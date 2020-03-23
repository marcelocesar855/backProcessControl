const express = require('express');
const routes = express.Router();
const { processoController, caixaController, assuntoController, setorController } = require('./controllers');

//PROCESSOS
routes.post('/processo', processoController.store)

routes.get('/processos', processoController.index)

routes.put('/processo/:id', processoController.update)

routes.delete('/processo/:id', processoController.destroy)

routes.get('/processos-dados', processoController.indexProcessosWithData)

routes.get('/processos-params', processoController.indexProcessosByParams)

routes.get('/processos-search', processoController.indexByNumber)

//CAIXA
routes.post('/caixa', caixaController.store)

routes.get('/caixas', caixaController.index)

routes.put('/caixa/:id', caixaController.update)

routes.delete('/caixa/:id', caixaController.destroy)

//ASSUNTO
routes.post('/assunto', assuntoController.store)

routes.get('/assuntos', assuntoController.index)

routes.put('/assunto/:id', assuntoController.update)

routes.delete('/assunto/:id', assuntoController.destroy)

//SETOR
routes.post('/setor', setorController.store)

routes.get('/setors', setorController.index)

routes.put('/setor/:id', setorController.update)

routes.delete('/setor/:id', setorController.destroy)

module.exports = routes;