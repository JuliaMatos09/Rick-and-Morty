var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    dashController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.listar(req, res);
});

router.get("/listar2", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    dashController.listar2(req, res);
});

router.get("/listar3", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.listar3(req, res);
});

router.get("/listar4", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    dashController.listar4(req, res);
});


module.exports = router;