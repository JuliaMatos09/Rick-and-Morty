
- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS individual ;
USE individual ;

-- -----------------------------------------------------
-- Table `individual`.`cadastro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS cadastro(
  `idCadastro` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `senha` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idCadastro`));


-- -----------------------------------------------------
-- Table `individual`.`personagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS personagens(
  `idPersona` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idPersona`));


-- -----------------------------------------------------
-- Table `individual`.`votacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS votacao (
  `idVotacao` INT NOT NULL AUTO_INCREMENT,
  `fkUser` INT NOT NULL,
  `fkPersona` INT NOT NULL,
  PRIMARY KEY (`idVotacao`, `fkUser`, `fkPersona`),
  CONSTRAINT `votacao_ibfk_1`
    FOREIGN KEY (`fkUser`)
    REFERENCES `individual`.`cadastro` (`idCadastro`),
  CONSTRAINT `votacao_ibfk_2`
    FOREIGN KEY (`fkPersona`)
    REFERENCES `individual`.`personagens` (`idPersona`));

select * from cadastro;
desc personagens;

desc votacao;

SELECT * FROM VOTACAO JOIN CADASTRO ON fkUser = idCadastro;


        SELECT nome, count(idVotacao) as 'quantidadedevotos' FROM votacao join personagens on fkPersona = idPersona group by nome;
select * from votacao;

