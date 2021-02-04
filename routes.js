const express = require('express');
const routes = express.Router();
const { processoController, caixaController, assuntoController, setorController, dossieController, pessoaController } = require('./controllers');

//PROCESSOS
routes.post('/processo', processoController.store)

routes.get('/processos', processoController.index)

routes.put('/processo/:id', processoController.update)

routes.delete('/processo/:id', processoController.destroy)

routes.get('/processos-dados', processoController.indexProcessosWithData)

routes.post('/processos-params', processoController.indexProcessosByParams)

//CAIXA
routes.post('/caixa', caixaController.store)

routes.get('/caixas', caixaController.index)

routes.put('/caixa/:id', caixaController.update)

routes.delete('/caixa/:id', caixaController.destroy)

routes.post('/caixas-setor', caixaController.indexBySetor)

routes.get('/caixas-dados', caixaController.indexWithData)

routes.post('/caixa-params', caixaController.indexCaixaByParams)

//ASSUNTO
routes.post('/assunto', assuntoController.store)

routes.get('/assuntos', assuntoController.index)

routes.put('/assunto/:id', assuntoController.update)

routes.delete('/assunto/:id', assuntoController.destroy)

routes.post('/assunto-params', assuntoController.indexAssuntoByParams)

//SETOR
routes.post('/setor', setorController.store)

routes.get('/setores', setorController.index)

routes.put('/setor/:id', setorController.update)

routes.delete('/setor/:id', setorController.destroy)

routes.post('/setor-params', setorController.indexSetorByParams)

//DOSSIE
routes.post('/dossie', dossieController.store)

routes.get('/dossies', dossieController.index)

routes.put('/dossie/:id', dossieController.update)

routes.delete('/dossie/:id', dossieController.destroy)

routes.post('/dossie-params', dossieController.indexDossieByParams)

routes.get('/dossie-rows', dossieController.count)

//PESSOA
routes.post('/pessoa', pessoaController.store)

routes.get('/pessoas', pessoaController.index)

routes.get('/pessoas-dados', pessoaController.indexPessoaWithData)

routes.put('/pessoa/:id', pessoaController.update)

routes.delete('/pessoa/:id', pessoaController.destroy)

routes.post('/pessoa-params', pessoaController.indexPessoaByParams)

module.exports = routes;