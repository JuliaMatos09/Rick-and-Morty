var dashModel = require("../models/dashModel");


function listar(req, res) {
    dashModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar2(req, res) {
    dashModel.listar2().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar3(req, res) {
    dashModel.listar3().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar4(req, res) {
    dashModel.listar4().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var fkUser = req.body.fkUserServer;
    var fkPersona = req.body.fkPersonaServer;


    dashModel.cadastrar(fkUser,fkPersona).then(function(resposta){
        if(resposta.length > 0){
            res.status(200).send("dash criada com sucesso");
        }else{
            res.status(204).send("Nada encontrado")
        }
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    listar2,
    listar3,
    listar4,
    cadastrar
}