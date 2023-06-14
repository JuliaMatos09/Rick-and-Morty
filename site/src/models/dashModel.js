var database = require("../database/config")

function listar() {
    var instrucao = `
    SELECT nome, count(idVotacao) as 'quantidadedevotos' FROM votacao join personagens on fkPersona = idPersona group by nome order by quantidadedevotos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}





function listar4() {
    var instrucao = `
    select  count(idVotacao) as 'Soma de votos ' from votacao 
    join personagens on idPersona = fkPersona ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkUser,fkPersona) {
    var instrucao = `
        INSERT INTO votacao (fkUser,fkPersona) VALUES (${fkUser},${fkPersona});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    listar4
};